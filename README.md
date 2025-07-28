# QSData

QSData is a PERN stack application for managing Pakistan PWD project data.
It implements JWT authentication, role based access control and several project tables.

## Features

- Express API built with Node.js
- PostgreSQL database
- Simple React front end
- Docker and Docker Compose support
- CI pipeline via GitHub Actions
- Jest tests and ESLint

## Requirements

- Node.js 18+
- Docker and Docker Compose
- PostgreSQL

## Setup

1. Copy `.env.example` to `.env` and update the environment variables.
2. Install dependencies:

```bash
npm install
```

3. Initialize the database schema and seed data:

```bash
npm run db:init
```

4. Build the client with Vite:

```bash
npm run client:build
```

5. Start the database and server using Docker Compose:

```bash
docker-compose up --build
```

The API will be available at `http://localhost:3000`.
`CLIENT_ORIGIN` controls which origin can access the API via CORS.

### Development with Docker and hot reloading

When developing locally you can start the stack with `docker-compose.dev.yml`
to enable hot reloading:

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

The API will still be reachable at `http://localhost:3000` and the React
dev server will run on `http://localhost:5173`.

The `.env` file requires `JWT_SECRET` which is used to sign login tokens.

### Local development with nodemon

Run `npm run dev` to start the server with nodemon. The `nodemon.json` config watches `client/src` and rebuilds the client with `npm run client:build` whenever the server restarts. The built files are served from `client/dist` on `http://localhost:3000`.

## Running Tests

```bash
npm test
```

## Project Structure

- `index.js` – Express server entry point
- `db/` – database connection and SQL files
- `routes/` – API routes
- `client/` – React application
- `Dockerfile` – server Docker image
- `docker-compose.yml` – multi-service setup

## License

This project is licensed under the ISC License. See [LICENSE](LICENSE) for details.
