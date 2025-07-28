# QSData

QSData is a secure PERN stack application for managing Pakistan PWD project data.
It implements JWT authentication, role-based access control, and several project tables with enhanced security features.

## 🔒 Security Features

- **JWT Authentication** with secure token management
- **Role-based Access Control** (master, originator, senior roles)
- **Enhanced Security Headers** (Helmet, CORS, CSP)
- **Rate Limiting** to prevent abuse
- **SQL Injection Protection** with parameterized queries
- **Password Hashing** with bcrypt
- **Environment Variable Security** - no hardcoded secrets
- **Database Port Isolation** - database not exposed externally

## 🚀 Features

- Express API built with Node.js
- PostgreSQL database with persistent storage
- React frontend with modern UI
- Docker and Docker Compose support
- Hot reloading for development
- CI pipeline via GitHub Actions
- Jest tests and ESLint

## 📋 Requirements

- Node.js 18+
- Docker and Docker Compose
- PostgreSQL (included in Docker setup)

## 🛠️ Setup

### 1. Environment Configuration

Create a `.env` file in the project root:

```bash
# Generate JWT secret: openssl rand -base64 64
JWT_SECRET=your-super-secret-jwt-key-here
DATABASE_URL=postgres://postgres:your-password@db:5432/qsdata
POSTGRES_PASSWORD=your-strong-database-password
CLIENT_ORIGIN=http://localhost:5173
NODE_ENV=development
PORT=3000
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=100
```

### 2. Development Setup

```bash
# Install dependencies
npm install

# Start with hot reloading (recommended for development)
docker-compose -f docker-compose.dev.yml up --build
```

### 3. Production Setup

```bash
# Build and start production containers
docker-compose up --build
```

## 🔐 Authentication

### Development Users
- **Admin**: `admin` / `admin` (master role)
- **User**: `user` / `user` (originator role)

### Adding New Users
Users are managed in `authUsers.js`. To add a new user:

1. Generate password hash:
```bash
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('your-password', 10).then(hash => console.log(hash))"
```

2. Add to `authUsers.js`:
```javascript
{ 
  username: 'newuser', 
  passwordHash: 'generated-hash-here', 
  role: 'originator' 
}
```

## 🌐 Access Points

- **Frontend**: http://localhost:3000 (production) or http://localhost:5173 (development)
- **Backend API**: http://localhost:3000/api
- **Database**: Internal only (not exposed externally)

## 🔧 Development Commands

```bash
# Development with hot reloading
docker-compose -f docker-compose.dev.yml up --build

# Production build
docker-compose up --build

# Run tests
npm test

# Database initialization
npm run db:init

# Client build
npm run client:build
```

## 📁 Project Structure

```
QSData/
├── index.js              # Express server entry point
├── authUsers.js          # User management (development)
├── middleware/           # Authentication & authorization
├── controllers/          # API controllers
├── routes/              # API routes
├── db/                  # Database connection & schemas
├── client/              # React frontend
├── docker-compose.yml   # Production Docker setup
├── docker-compose.dev.yml # Development Docker setup
└── .env                 # Environment variables (not in repo)
```

## 🔒 Security Notes

- **Never commit `.env` files** to version control
- **Use strong passwords** for production
- **Rotate JWT secrets** regularly
- **Monitor logs** for suspicious activity
- **Keep dependencies updated**

## 🚀 Deployment

### VPS Deployment
1. Clone repository to VPS
2. Create `.env` file with production values
3. Run `docker-compose up --build -d`
4. Configure reverse proxy (nginx) for HTTPS
5. Set up firewall rules

### Environment Variables for Production
```bash
JWT_SECRET=your-production-jwt-secret
DATABASE_URL=postgres://postgres:strong-password@db:5432/qsdata
POSTGRES_PASSWORD=strong-database-password
CLIENT_ORIGIN=https://yourdomain.com
NODE_ENV=production
```

## 📝 License

This project is licensed under the ISC License. See [LICENSE](LICENSE) for details.
