const Comment = require("../models/comment.model");

require("dotenv").config();

exports.getByArticleId = (req, res) => {
    Comment.find({ "idArtigo": req.query.idArtigo }, (err, comments) => {
        if (err) res.status(500).send({ message: 'Error' })
        res.send(comments)
    })
}

exports.create = (req, res) => {
    const newComment = new Comment({
        autor: req.body.autor,
        idArtigo: req.body.idArtigo,
        comentario: req.body.comentario
    })

    newComment.save()
        .then(data => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: "Nao foi possivel criar o artigo"
            })
        })
}

