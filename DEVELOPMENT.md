# QSData Development Setup

## Port Configuration

To prevent port conflicts, this project now uses separate ports for different services:

- **Backend API Server**: `http://localhost:3000`
- **Frontend Development Server**: `http://localhost:5173`
- **Database**: PostgreSQL (configured in `.env`)

## Starting Development Environment

### Option 1: Automated Launcher (Recommended)

#### Single Terminal (Recommended):
```bash
./start-dev.ps1
```

#### Separate Windows:
```bash
# PowerShell
./dev-start.ps1

# Command Prompt
dev-start.bat
```

**Single Terminal Benefits:**
- Runs both services in one terminal with proper output
- Easier to manage and stop (Ctrl+C stops both)
- Shows current directory for debugging

**Separate Windows Benefits:**
- Opens backend and frontend in separate terminal windows
- Good for monitoring each service independently
- Automatically switches to correct directory

Both approaches will:
1. Start the backend server on port 3000
2. Start the frontend development server on port 5173
3. Open your browser to the frontend URL

### Option 2: Manual Start

#### Terminal 1 - Backend:

```bash
npm run dev:backend
```

#### Terminal 2 - Frontend:

```bash
npm run dev:frontend
```

### Option 3: Single Command (Cross-platform)

```bash
npm run dev:full
```

## Available Scripts

- `npm run dev` - Backend only (legacy)
- `npm run dev:backend` - Backend server only
- `npm run dev:frontend` - Frontend development server only
- `npm run dev:full` - Both services (may not work on all shells)
- `npm run client:build` - Build frontend for production

## Development URLs

- **Frontend Application**: http://localhost:5173
- **Backend API**: http://localhost:3000/api
- **Health Check**: http://localhost:3000/health

## API Demo Access

1. Start the development environment using any method above
2. Open http://localhost:5173 in your browser
3. Login with development credentials:
   - Admin: `username: admin, password: admin`
   - User: `username: user, password: user`
4. Navigate to "API Demo" in the sidebar

## Proxy Configuration

The frontend automatically proxies API calls from `/api/*` to the backend server at `http://localhost:3000`. This is configured in `vite.config.js`.

## Troubleshooting

### Port Already in Use

If you get port conflicts:

- Kill any existing Node.js processes
- Use the automated launchers which handle this better
- Check what's using the ports: `netstat -ano | findstr :3000` or `netstat -ano | findstr :5173`

### Frontend Not Updating

If the frontend doesn't reflect your changes:

- Make sure you're accessing http://localhost:5173 (not 3000)
- Check the frontend terminal for build errors
- Try refreshing the browser or clearing cache

### API Calls Failing

- Ensure backend is running on port 3000
- Check the browser's Network tab for failed requests
- Verify the proxy configuration in `vite.config.js`
