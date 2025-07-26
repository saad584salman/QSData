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

4. Start the database and server using Docker Compose:

```bash
docker-compose up --build
```

The API will be available at `http://localhost:3000`.
`CLIENT_ORIGIN` controls which origin can access the API via CORS.

The `.env` file requires `JWT_SECRET` which is used to sign login tokens.

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
