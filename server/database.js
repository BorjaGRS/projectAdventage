const mongoose = require('mongoose');

const URI ='mongodb://localhost/adventage';

mongoose.connect(URI,{useNewUrlParser:true})
.then(db=> console.log('db is conectada'))
.catch(db=> console.error(err));

module.exports = mongoose;