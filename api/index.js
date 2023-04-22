const express = require('express')
const app = express()
const { PORT } = require('../config')
const cors = require('cors');

const parseRoutes = require('../routes/parserRoutes')

app.use(cors)

//root route
app.get('/', (_, res) => {
  res.send('App works properly!');
});

// this route will fetch jobs from external APIs
app.use('/api/jobs', parseRoutes);

// Use express's default error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) return next(err);
  res.status(400).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})