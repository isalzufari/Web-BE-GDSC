const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
        deskripsi: {
        type: String,
        required: true,
    },
        penulis: {
        type: String,
        required: true,
    },
        bahasa: {
        type: String,
        required: true,
    },
        harga: {
        type: Number,
        required: true,
    },
        image: {
        type: String,
        required: true,
    },
        jumlahHalaman: {
        type: String,
        required: true,
    },
        penerbit: {
        type: String,
        required: true,
    },
        isbn: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Book', bookSchema);
