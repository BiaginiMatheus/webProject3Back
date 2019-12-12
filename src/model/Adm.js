const { Schema, model } = require('mongoose');

const AdmSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    duvidas: [String]
}, {
    timestamps: true
});

module.exports = model('Adm', AdmSchema);