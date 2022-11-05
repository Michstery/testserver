const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    slackUsername: {
        type: String
    },
    operation_type: {
        type: Operator,
        enum: { 
            values: ['addition', 'subtraction', 'multiplication'],
            message: 'Operational type is either: addition, subtraction or multiplication'
        }
    },
    x: {
        type: Number
    },
    y: {
        type: Number
    }
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;