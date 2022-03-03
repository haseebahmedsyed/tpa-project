const mongoose = require('mongoose');
const { Schema } = mongoose;

const DgroupSchema = new Schema({
    value: {
        type: String,
        unique: true,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const Dgroup = mongoose.model('dgroup', DgroupSchema)

module.exports = Dgroup;
