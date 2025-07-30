# QSData Setup Guide

## 🚨 Current Issue: Database Not Running

The API tests are failing because PostgreSQL database is not running. Here's how to fix it:

## 🔧 Quick Fix Options:

### Option 1: Docker (Recommended)

```bash
# 1. Start Docker Desktop
# 2. Run database
docker-compose -f docker-compose.dev.yml up -d

# 3. Wait 10 seconds for database to start
timeout /t 10 /nobreak >nul

# 4. Run database setup
npm run db:migrate
npm run db:seed

# 5. Test database connection
node test-db.js

# 6. Run API tests
npm run test:api
```

### Option 2: Local PostgreSQL

```bash
# 1. Install PostgreSQL locally
# 2. Create database: qsdata
# 3. Update .env with local connection
# 4. Run migrations and seeds
npm run db:migrate
npm run db:seed
```

## 📋 Current Status:

✅ **Backend Server**: Running on http://localhost:3000  
✅ **Authentication**: Working (admin/admin)  
✅ **Health Check**: Working  
❌ **Database**: Not connected  
❌ **API Endpoints**: Failing due to database

## 🧪 Test Commands:

```bash
# Quick health check
npm run test:quick

# Full API test suite
npm run test:api

# Database connection test
node test-db.js

# Start development
npm run dev:backend
npm run dev:frontend
```

## 🎯 Next Steps:

1. **Start Docker Desktop**
2. **Run database**: `docker-compose -f docker-compose.dev.yml up -d`
3. **Setup database**: `npm run db:migrate && npm run db:seed`
4. **Test everything**: `npm run test:api`
5. **Start frontend**: `npm run dev:frontend`

## 📊 Expected Results:

After database is running:

- ✅ All API endpoints should return 200/201
- ✅ Authentication should work
- ✅ Frontend should login successfully
- ✅ API demo should work properly
