const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Requests = new Schema({
    desc : String,
    category: String,
    reqard : String,
    quantity : Number
});

module.exports = mongoose.model('Requests', Requests, 'Requests');