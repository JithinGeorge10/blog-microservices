const mongoose = require('mongoose')

const dbConnect = async () => {
   try {
      await mongoose.connect(process.env.CONNECTION_STRING)
      console.log('mongodb connected');
   } catch (error) {
      console.log(error);
   }
}

module.exports = dbConnect