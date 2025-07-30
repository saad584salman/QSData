# QSData Development Environment

## 🚀 Quick Start

### One-Command Setup

**Windows (PowerShell):**

```powershell
.\dev-start.ps1
```

**Windows (Command Prompt):**

```cmd
dev-start.bat
```

**Cross-Platform (Node.js):**

```bash
npm run dev:start
```

**Direct Docker Compose:**

```bash
npm run dev:docker
```

## 📋 Prerequisites

1. **Docker Desktop** - Download from [docker.com](https://www.docker.com/products/docker-desktop)
2. **Node.js 18+** - Download from [nodejs.org](https://nodejs.org/)
3. **Git** - For version control

## 🏗️ Architecture

The development environment consists of three main services:

### 🗄️ Database (PostgreSQL)

- **Port**: 5432
- **Image**: `postgres:14-alpine`
- **Features**:
  - Health checks
  - Persistent volume storage
  - Automatic migrations and seeding

### 🔧 Backend Server (Node.js/Express)

- **Port**: 3000
- **Features**:
  - Hot reloading with nodemon
  - TypeScript support
  - API documentation
  - JWT authentication
  - Rate limiting

### 🌐 Frontend Client (React/Vite)

- **Port**: 5173
- **Features**:
  - Hot reloading with Vite
  - TypeScript support
  - Tailwind CSS
  - Dark mode
  - Responsive design

## 🔧 Development Commands

### Startup Commands

```bash
# Start development environment
npm run dev:start          # Cross-platform startup script
npm run dev:docker         # Direct Docker Compose
npm run dev:docker:clean   # Clean restart (removes volumes)

# Stop services
npm run docker:down        # Stop containers
npm run docker:clean       # Stop and clean everything
```

### Database Commands

```bash
npm run db:setup          # Run migrations + seed
npm run db:reset          # Rollback + migrate + seed
npm run db:migrate        # Run migrations only
npm run db:seed           # Run seeds only
```

### Development Commands

```bash
npm run dev:backend       # Backend only (local)
npm run dev:frontend      # Frontend only (local)
npm run dev:full          # Both (local)
npm run type-check        # TypeScript check
npm run build            # Build frontend
```

### Utility Commands

```bash
npm run docker:logs       # View all logs
npm run docker:build      # Build containers
npm run lint             # ESLint check
npm run lint:fix         # ESLint auto-fix
npm run format           # Prettier format
```

## 🌐 Service URLs

Once started, access your services at:

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000
- **Database**: localhost:5432 (via pgAdmin or psql)
- **API Documentation**: http://localhost:3000/api/docs

## 🔥 Hot Reloading

Both frontend and backend support hot reloading:

- **Frontend**: Vite automatically reloads on file changes
- **Backend**: Nodemon restarts server on file changes
- **Database**: Migrations run automatically on startup

## 🐛 Troubleshooting

### Docker Issues

```bash
# Check Docker status
docker --version
docker-compose --version

# Restart Docker Desktop
# Then run:
npm run docker:clean
npm run dev:docker
```

### Database Issues

```bash
# Reset database completely
npm run docker:clean
npm run dev:docker

# Or manually:
npm run db:reset
```

### Port Conflicts

If ports are already in use:

```bash
# Check what's using the ports
netstat -ano | findstr :3000
netstat -ano | findstr :5173
netstat -ano | findstr :5432

# Kill the processes or change ports in docker-compose.dev.yml
```

### Environment Issues

```bash
# Recreate .env file
rm .env
npm run dev:start
```

## 📁 File Structure

```
QSData/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── hooks/        # Custom hooks
│   │   ├── lib/          # Utilities
│   │   └── types/        # TypeScript types
│   └── index.html
├── controllers/           # Backend controllers
├── models/               # Database models
├── routes/               # API routes
├── scripts/              # Utility scripts
├── tests/                # Test files
├── docker-compose.dev.yml # Development environment
└── package.json
```

## 🔒 Environment Variables

The `.env` file is automatically created with default values:

```env
# Database Configuration
POSTGRES_PASSWORD=postgres
DATABASE_URL=postgres://postgres:postgres@localhost:5432/qsdata

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Client Configuration
CLIENT_ORIGIN=http://localhost:5173

# Environment
NODE_ENV=development

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🧪 Testing

### Run Tests

```bash
npm test                  # All tests
npm run test:api         # API tests only
npm run test:quick       # Health check
```

### Test Credentials

- **Admin**: username: `admin`, password: `admin`
- **User**: username: `user`, password: `user`

## 🚀 Production

For production deployment, use the main `docker-compose.yml`:

```bash
docker-compose up --build
```

## 📚 Additional Resources

- [API Documentation](http://localhost:3000/api/docs)
- [Database Schema](./db/schema.sql)
- [TypeScript Configuration](./tsconfig.json)
- [Tailwind Configuration](./tailwind.config.js)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Submit a pull request

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review the logs: `npm run docker:logs`
3. Create an issue with detailed error information
