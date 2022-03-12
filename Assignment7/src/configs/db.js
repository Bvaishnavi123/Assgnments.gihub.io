const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const connect = () => {
    return mogoose.connect("mongodb://127.0.0.1:27017/All_data_collections");
};

module.exports = connect;