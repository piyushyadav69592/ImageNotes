const mongoose = require('mongoose');

async function connectdb() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("database connect successfully");
}

module.exports= connectdb