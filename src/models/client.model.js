let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kadi-hub3:jadoredior@cluster0-yi4mf.mongodb.net/<dbname>?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

let ClientSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Client', ClientSchema);