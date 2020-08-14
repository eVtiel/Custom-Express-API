const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: 'string',
        unique: true,
        require: true
    },
    password: {
        type: 'string',
        require: true
    }
});

mongoose.model('User', userSchema);