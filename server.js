require('dotenv').config();
const path = require('path');
const express = require('express');
const { logger } = require('./logEvents.js');

const cors = require('cors');

// Initializacion
const app = express();
app.disable('x-powered-by');

require('./database');

app.set('port', process.env.PORT);

app.use(express.urlencoded({ extended: false }))
    .use(express.json())
    .use(cors())
    .use(logger);

const booksRoute = require('./routes/booksRoute');

// Routes
app.use('/api/books', booksRoute);

// Static Files
app.use('/src', express.static(path.join(__dirname, 'src')));

app.use((req, res, next) => {
    return res.status(400).json({ message: 'No existe esta operacion' });
});

// Server start
app.listen(app.get('port'), () => {
    console.log('Server running on port ', app.get('port'));
});
