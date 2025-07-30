# QSData VPS Production Deployment Guide

## Prerequisites

### VPS Requirements

- **OS**: Ubuntu 20.04+ or CentOS 8+
- **RAM**: Minimum 2GB (4GB recommended)
- **Storage**: 20GB+ available space
- **CPU**: 2+ cores
- **Domain**: Your domain name (optional but recommended)

### Software Requirements

- Docker and Docker Compose
- Git
- Nginx (for reverse proxy)
- SSL certificate (Let's Encrypt)

## Step 1: Server Setup

### 1.1 Initial Server Configuration

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install essential packages
sudo apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Logout and login again for Docker group changes
```

### 1.2 Install Nginx

```bash
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

### 1.3 Install Certbot (for SSL)

```bash
sudo apt install -y certbot python3-certbot-nginx
```

## Step 2: Application Deployment

### 2.1 Clone Repository

```bash
# Create application directory
sudo mkdir -p /opt/qsdata
sudo chown $USER:$USER /opt/qsdata
cd /opt/qsdata

# Clone your repository
git clone <your-repository-url> .
```

### 2.2 Create Production Environment File

```bash
# Create production .env file
cat > .env << 'EOF'
# Production Environment Variables
JWT_SECRET=your-super-secure-jwt-secret-here-generate-with-openssl-rand-base64-64
DATABASE_URL=postgres://postgres:your-strong-database-password@db:5432/qsdata
POSTGRES_PASSWORD=your-strong-database-password
CLIENT_ORIGIN=https://yourdomain.com
NODE_ENV=production
PORT=3000
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=100
EOF
```

### 2.3 Generate Secure JWT Secret

```bash
# Generate a secure JWT secret
openssl rand -base64 64
# Copy the output and replace 'your-super-secure-jwt-secret-here' in .env
```

### 2.4 Create Production Docker Compose

```bash
# Create production docker-compose.yml
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  db:
    image: postgres:14
    restart: always
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: qsdata
    volumes:
      - db-data:/var/lib/postgresql/data
    networks:
      - qsdata-network

  server:
    image: node:18-alpine
    working_dir: /app
    command: sh -c "npm install --production && npm run client:build && npm start"
    volumes:
      - .:/app
      - /app/node_modules
    ports:
      - '3000:3000'
    environment:
      - DATABASE_URL=postgres://postgres:${POSTGRES_PASSWORD}@db:5432/qsdata
      - JWT_SECRET=${JWT_SECRET}
      - CLIENT_ORIGIN=${CLIENT_ORIGIN}
      - NODE_ENV=production
      - DB_HOST=db
      - DB_PORT=5432
      - DB_NAME=qsdata
      - DB_USER=postgres
      - DB_PASSWORD=${POSTGRES_PASSWORD}
    depends_on:
      - db
    networks:
      - qsdata-network

volumes:
  db-data:

networks:
  qsdata-network:
    driver: bridge
EOF
```

## Step 3: Database Setup

### 3.1 Initialize Database

```bash
# Start services
docker-compose up -d db

# Wait for database to be ready
sleep 10

# Run migrations
docker-compose run --rm server npm run db:migrate

# Seed database
docker-compose run --rm server npm run db:seed

# Refresh materialized views
docker-compose run --rm server npm run refresh-exports
```

## Step 4: Nginx Configuration

### 4.1 Create Nginx Site Configuration

```bash
sudo tee /etc/nginx/sites-available/qsdata << 'EOF'
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL Configuration (will be added by Certbot)
    # ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    # ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;

    # Proxy to Node.js application
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static files caching
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
EOF
```

### 4.2 Enable Site and Get SSL Certificate

```bash
# Enable the site
sudo ln -s /etc/nginx/sites-available/qsdata /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# Get SSL certificate (replace yourdomain.com with your actual domain)
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Reload nginx
sudo systemctl reload nginx
```

## Step 5: Start Application

### 5.1 Start All Services

```bash
# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

### 5.2 Verify Deployment

```bash
# Check if application is responding
curl -I https://yourdomain.com

# Check database connection
docker-compose exec server npm run db:migrate:status
```

## Step 6: Production User Management

### 6.1 Create Production Users

Create a `users.json` file for production users:

```bash
cat > users.json << 'EOF'
{
  "users": [
    {
      "username": "admin",
      "passwordHash": "$2b$10$your-hashed-password-here",
      "role": "master"
    },
    {
      "username": "manager",
      "passwordHash": "$2b$10$your-hashed-password-here",
      "role": "originator"
    }
  ]
}
EOF
```

### 6.2 Generate Password Hashes

```bash
# Generate password hash for production
node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('your-secure-password', 10));"
```

## Step 7: Monitoring and Maintenance

### 7.1 Setup Log Rotation

```bash
# Create logrotate configuration
sudo tee /etc/logrotate.d/qsdata << 'EOF'
/opt/qsdata/logs/*.log {
    daily
    missingok
    rotate 52
    compress
    delaycompress
    notifempty
    create 644 root root
}
EOF
```

### 7.2 Setup Automatic Backups

```bash
# Create backup script
cat > /opt/qsdata/backup.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/opt/backups/qsdata"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Backup database
docker-compose exec -T db pg_dump -U postgres qsdata > $BACKUP_DIR/db_backup_$DATE.sql

# Backup application files
tar -czf $BACKUP_DIR/app_backup_$DATE.tar.gz --exclude=node_modules --exclude=.git .

# Keep only last 7 days of backups
find $BACKUP_DIR -name "*.sql" -mtime +7 -delete
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
EOF

chmod +x /opt/qsdata/backup.sh

# Add to crontab (daily backup at 2 AM)
(crontab -l 2>/dev/null; echo "0 2 * * * /opt/qsdata/backup.sh") | crontab -
```

### 7.3 Setup Auto-restart

```bash
# Create systemd service for auto-restart
sudo tee /etc/systemd/system/qsdata.service << 'EOF'
[Unit]
Description=QSData Application
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/opt/qsdata
ExecStart=/usr/local/bin/docker-compose up -d
ExecStop=/usr/local/bin/docker-compose down
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
EOF

# Enable and start service
sudo systemctl enable qsdata
sudo systemctl start qsdata
```

## Step 8: Security Hardening

### 8.1 Firewall Configuration

```bash
# Configure UFW firewall
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### 8.2 Regular Security Updates

```bash
# Setup automatic security updates
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

## Step 9: Performance Optimization

### 9.1 Database Optimization

```bash
# Add to docker-compose.yml under db service
environment:
  POSTGRES_USER: postgres
  POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
  POSTGRES_DB: qsdata
  POSTGRES_INITDB_ARGS: "--encoding=UTF-8 --lc-collate=C --lc-ctype=C"
```

### 9.2 Application Optimization

```bash
# Add to package.json scripts
"start:prod": "NODE_ENV=production node index.js"
```

## Troubleshooting

### Common Issues:

1. **Database Connection Failed**

   ```bash
   docker-compose logs db
   docker-compose exec db psql -U postgres -d qsdata
   ```

2. **SSL Certificate Issues**

   ```bash
   sudo certbot renew --dry-run
   sudo systemctl reload nginx
   ```

3. **Application Not Starting**

   ```bash
   docker-compose logs server
   docker-compose down && docker-compose up -d
   ```

4. **Nginx Configuration Issues**
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

## Maintenance Commands

```bash
# Update application
cd /opt/qsdata
git pull
docker-compose down
docker-compose up -d --build

# View logs
docker-compose logs -f

# Database backup
docker-compose exec db pg_dump -U postgres qsdata > backup.sql

# Restart services
docker-compose restart

# Check disk space
df -h
docker system prune -f
```

## Monitoring

Consider setting up monitoring with:

- **Prometheus + Grafana** for metrics
- **Sentry** for error tracking
- **Uptime Robot** for availability monitoring

This setup provides a production-ready deployment with SSL, automatic backups, monitoring, and security hardening.
