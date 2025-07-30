# QSData - PERN Stack with EAV Pattern

A comprehensive PERN-stack (PostgreSQL, Express, React, Node.js) application implementing a flexible Entity-Attribute-Value (EAV) pattern for dynamic data management, task workflows, and approval systems.

## 🏗️ Architecture

### Database Design

- **EAV Pattern**: Fully flexible entity-property system
- **Task Management**: Rules-based task generation and tracking
- **Approval Workflow**: Multi-level approval system
- **Audit Logging**: Complete change history tracking
- **Materialized Views**: Optimized data exports

### Key Features

- ✅ **Dynamic Properties**: Define custom properties for any entity type
- ✅ **Task Automation**: Rule-based task generation and assignment
- ✅ **Approval Workflows**: Multi-level approval system with audit trails
- ✅ **Role-Based Access**: Hierarchical permissions system
- ✅ **Audit Logging**: Complete change history for all properties
- ✅ **Performance Optimized**: Indexed queries and materialized views
- ✅ **TypeScript Ready**: Full TypeScript support with type definitions
- ✅ **Modern Tooling**: ESLint, Prettier, Jest testing

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Docker and Docker Compose
- npm or yarn

### Installation

1. **Clone and Install**

```bash
git clone <repository-url>
cd QSData
npm install
```

2. **Development Setup**

```bash
# Run the development setup script
node scripts/setup-dev.js
```

3. **Start Development Environment**

**Option A: Automated Launcher (Recommended)**

```bash
# Single Terminal (Recommended)
./start-dev.ps1

# Separate Windows
./dev-start.ps1     # PowerShell
dev-start.bat       # Command Prompt
```

**Option B: Docker (Full Stack)**

```bash
# Start all services (database, backend, frontend)
docker-compose -f docker-compose.dev.yml up --build
```

**Option C: Manual Start**

```bash
# Terminal 1 - Backend
npm run dev:backend

# Terminal 2 - Frontend
npm run dev:frontend
```

> 📖 **Detailed Development Guide**: See [DEVELOPMENT.md](./DEVELOPMENT.md) for comprehensive setup instructions and troubleshooting.

4. **Access the Application**

- Frontend: http://localhost:5173
- Backend API: http://localhost:3000

### Development Login Credentials

- **Admin User**: username: `admin`, password: `admin`
- **Regular User**: username: `user`, password: `user`

### Alternative: Local Development

```bash
# Environment Setup
cp env.example .env
# Edit .env with your database credentials

# Database Setup
npm run db:migrate
npm run db:seed
npm run refresh-exports

# Start Development
npm run dev          # Backend
npm run client       # Frontend (in another terminal)
```

## 🚀 Production Deployment

### VPS Setup

1. **Clone Repository**

```bash
git clone <repository-url> /opt/qsdata
cd /opt/qsdata
```

2. **Environment Configuration**

```bash
# Copy production environment template
cp production.env .env
# Edit .env with your production values
```

3. **User Management**

```bash
# Copy production users template
cp production-users.json users.json
# Edit users.json with your production users
```

4. **Deploy with Docker**

```bash
docker-compose up -d
```

### Production Configuration

- **Environment**: Use `production.env` as template
- **Users**: Use `production-users.json` as template
- **SSL**: Configure with Let's Encrypt
- **Backups**: Set up automated database backups

See `VPS_DEPLOYMENT.md` for complete production setup guide.

## 📊 Database Schema

### Core Tables

#### Users & Roles

- `roles` - User roles with hierarchy levels
- `users` - User accounts with role and office assignments
- `offices` - Organizational structure with parent-child relationships

#### EAV System

- `property_definitions` - Define custom properties for entities
- `property_options` - Predefined options for property values
- `entity_properties` - Store actual property values (EAV pattern)
- `entity_property_logs` - Audit trail for property changes

#### Task Management

- `task_rules` - Define rules for automatic task generation
- `tasks` - Individual task instances with assignments
- `task_logs` - Task status change history

#### Permissions & Approvals

- `permissions` - Role and user-based access control
- `approval_requests` - Multi-level approval workflow

### Materialized Views

- `project_export` - Optimized project data for reporting

## 🔧 API Endpoints

### Projects

```
GET    /api/projects                    # List projects with filtering
GET    /api/projects/:id               # Get project details
POST   /api/projects                   # Create new project
PUT    /api/projects/:id               # Update project
DELETE /api/projects/:id               # Delete project
```

### Property Definitions

```
GET    /api/property-definitions       # List property definitions
GET    /api/property-definitions/:id   # Get property definition
POST   /api/property-definitions       # Create property definition
PUT    /api/property-definitions/:id   # Update property definition
DELETE /api/property-definitions/:id   # Delete property definition
```

### Entity Properties

```
GET    /api/entity-properties          # List with filtering
GET    /api/entity-properties/:id      # Get property details
POST   /api/entity-properties          # Create property value
PUT    /api/entity-properties/:id      # Update property value
DELETE /api/entity-properties/:id      # Delete property value
```

### Tasks

```
GET    /api/tasks                      # List tasks with filtering
GET    /api/tasks/:id                  # Get task details
POST   /api/tasks                      # Create new task
PUT    /api/tasks/:id                  # Update task
DELETE /api/tasks/:id                  # Delete task
POST   /api/tasks/:id/complete         # Mark task as complete
```

## 🛠️ Development

### Database Commands

```bash
npm run db:migrate          # Run migrations
npm run db:migrate:rollback # Rollback migrations
npm run db:seed             # Seed database
npm run db:refresh          # Reset and reseed database
```

### Code Quality

```bash
npm run lint               # Run ESLint
npm run lint:fix           # Fix linting issues
npm run format             # Format with Prettier
npm run type-check         # TypeScript type checking
```

### Testing

```bash
npm test                   # Run tests
npm run test:watch         # Watch mode
```

## 📁 Project Structure

```
QSData/
├── config/
│   └── database.js        # Database configuration
├── controllers/           # API controllers
├── middleware/            # Express middleware
├── migrations/            # Database migrations
├── models/               # Objection.js models
├── routes/               # API routes
├── seeds/                # Database seed data
├── scripts/              # Utility scripts
├── client/               # React frontend
└── tests/                # Test files
```

## 🔐 Environment Variables

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=qsdata
DB_USER=postgres
DB_PASSWORD=password

# JWT
JWT_SECRET=your-secret-key

# Server
PORT=3000
NODE_ENV=development

# Rate Limiting
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🎯 Key Features

### EAV Pattern Implementation

- **Dynamic Properties**: Define custom properties for any entity
- **Type Safety**: Support for string, number, date, and boolean values
- **Validation**: Built-in validation with formatting rules
- **Options**: Predefined value options for properties

### Task Management

- **Rule-Based**: Automatic task generation based on property changes
- **Assignment**: Assign to users or offices
- **Status Tracking**: Pending, completed, overdue statuses
- **Audit Trail**: Complete history of task changes

### Approval Workflow

- **Multi-Level**: Support for complex approval hierarchies
- **Property-Specific**: Approve specific property changes
- **Audit Trail**: Complete approval history with reasons

### Performance Features

- **Indexed Queries**: Optimized database indexes
- **Materialized Views**: Fast data exports
- **Pagination**: Efficient large dataset handling
- **Filtering**: Advanced query filtering capabilities

## 🧪 Testing

```bash
# Run all tests
npm test

# Run specific test file
npm test -- tests/projects.test.js

# Coverage report
npm test -- --coverage
```

## 🚀 Deployment

### Production Setup

1. Set environment variables
2. Run database migrations
3. Build frontend: `npm run client:build`
4. Start server: `npm start`

### Docker Support

```bash
# Build and run with Docker
docker-compose up -d

# Run migrations in container
docker-compose exec app npm run db:migrate
```

## 📈 Monitoring

### Health Checks

- `GET /health` - Application health status
- `GET /api/health` - API health status

### Logging

- Structured logging with timestamps
- Error tracking with stack traces
- Database query logging in development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run linting and tests
6. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For issues and questions:

- Check the documentation
- Review existing issues
- Create a new issue with detailed information

---

**Built with ❤️ using PERN Stack and EAV Pattern**
