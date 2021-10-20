const mongoose = require ('mongoose');
const db = async () => {
    try {
        mongoose.connect(
            process.env.MONGOURI_DB|| 'mongodb://localhost/fitnesstracker',
            {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
            }
        );
        console.log ("Mongo db connected!");
    } catch(e) {
        console.log (e);
    }
}

module.exports = db;