import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import progressRouter from './routes/progress.js';
import authRouter from './routes/auth.js';
import sapRouter from './routes/sapProjects.js';
import zoneRouter from './routes/zoneSummary.js';
import psdpRouter from './routes/psdpProjects.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(
  helmet({
    crossOriginOpenerPolicy: false,
    originAgentCluster: false,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:'],
      },
    },
  })
);
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || '*',
  })
);
app.use(rateLimit({ windowMs: 60 * 1000, max: 100 }));

app.use('/api', authRouter);
app.use('/api/progress', progressRouter);
app.use('/api/sap-projects', sapRouter);
app.use('/api/zone-summary', zoneRouter);
app.use('/api/psdp-projects', psdpRouter);

app.use(express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
