# QSData

QSData is a sample PERN stack application (PostgreSQL, Express, React, Node). It provides a basic API for tracking project progress and a React-based front end.

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

3. Start the database and server using Docker Compose:

```bash
docker-compose up --build
```

The API will be available at `http://localhost:3000`.

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
