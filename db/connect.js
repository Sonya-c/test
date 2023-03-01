const mongoose = require("mongoose");
const mongoURI = require("../config/keys").mongoURI;

async function connection() {
    mongoose
        .connect(
            mongoURI, { useNewUrlParser: true }
        )
        .then(() => {
            console.log("MongoDB successfully connected")
        })
        .catch(error => {
            console.log("Connection failed");
            console.error(error);
        });
}

module.exports = connection;
