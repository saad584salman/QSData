const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const progressRouter = require('./routes/progress');
const authRouter = require('./routes/auth');
const sapRouter = require('./routes/sapProjects');
const zoneRouter = require('./routes/zoneSummary');
const psdpRouter = require('./routes/psdpProjects');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || '*',
  })
);
app.use(
  rateLimit({ windowMs: 60 * 1000, max: 100 })
);

app.use('/api', authRouter);
app.use('/api/progress', progressRouter);
app.use('/api/sap-projects', sapRouter);
app.use('/api/zone-summary', zoneRouter);
app.use('/api/psdp-projects', psdpRouter);
app.use(express.static(path.join(__dirname, 'client')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
