const mongoose = require("mongoose");
// const mongoUrl = "mongodb://127.0.0.1/inotebook";
// const mongoUrl = "mongodb+srv://hardikagrl22:tEkoxOS8rnFGGmcJ@cluster0.ssdezgz.mongodb.net/inotebook";
const mongoUrl = "mongodb+srv://hardik22:76252263@notebook.6gyppvb.mongodb.net/";

// mongoose.connect('mongodb://127.0.0.1/test')

const connectToMongo = () => {
//   mongoose
//     .connect(mongoUrl)
//     .then(() => console.log("DB is connected"))
//     .catch((err) => console.log(err));

  mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

  const connection = mongoose.connection;

  connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });

  connection.once("open", () => {
    console.log("Connected to MongoDB");
  });
};

// // connectToMongo().catch(err => console.log(err));

// async const connectToMongo() {
//   await mongoose.connect(mongoUrl);
// }

module.exports = connectToMongo;
