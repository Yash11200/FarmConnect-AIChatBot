const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true,
        default:[],
        maxLength:5
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    timePosted: {
        type: String,
        default: () => new Date().toLocaleTimeString()
    }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;