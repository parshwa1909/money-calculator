const mongoose = require("mongoose");

const connectToMongo = () => {
    const mongoURL =
        "mongodb+srv://parshwa2001:<password>@parshwa19.jqxc2ra.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(mongoURL, () => {
        console.log("connected to mongo");
    });
};

module.exports = { connectToMongo };
