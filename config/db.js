const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// can also just do connect(db)
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    //if something goes wrong
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};
//export

module.exports = connectDB;
