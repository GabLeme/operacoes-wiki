const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    autor: String,
    idArtigo: String,
    comentario: String
})

module.exports = mongoose.model("Comment", CommentSchema);