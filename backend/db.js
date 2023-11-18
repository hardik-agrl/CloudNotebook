const mongoose = require('mongoose');
const mongoUrl= 'mongodb://127.0.0.1/inotebook'
// mongoose.connect('mongodb://127.0.0.1/test')
const connectToMongo = ()=>{
    mongoose.connect(mongoUrl)
    .then(() => console.log('DB is connected'))
    .catch(err => console.log(err));

}

// // connectToMongo().catch(err => console.log(err));

// async const connectToMongo() {
//   await mongoose.connect(mongoUrl);
// }

module.exports = connectToMongo;

