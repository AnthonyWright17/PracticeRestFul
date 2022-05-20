const express = require('express');
const app = express();

const showsRoutes = require('./src/animeRoutes');

const PORT = 5000;

app.use(express.json())
app.use('/shows/anime', showsRoutes)

app.listen(PORT)
