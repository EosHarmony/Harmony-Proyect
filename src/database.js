const mongoose = require('mongoose');

const url = 'mongodb+srv://root:n0m3l0@cluster0-ofyfi.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url)
    .then(db => console.log('Se conecto a la base de datos'))
    .catch(err => console.log(err));

module.exports = mongoose;