require('./models/User');
const express = require('express');
const mongoose = require('mongoose');
const bodeParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodeParser.json());
app.use(authRoutes);

const mongoUri = 'mongodb+srv://admin:1qaZxsw2@track-server.2you4.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo ', err);
});

app.get('/', (req, res) => {
    res.send('Hi there');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});