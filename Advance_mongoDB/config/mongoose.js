const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect("mongodb://127.0.0.1:27017/testingadbc")
        .then(() => {
            console.log("MongoDB Connected");
        })
        .catch((err) => {
            console.log("MongoDB Connection Error:", err);
        });
}

module.exports = connectDB;