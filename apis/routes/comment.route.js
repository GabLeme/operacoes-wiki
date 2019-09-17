module.exports = (app) => {
    const comments = require("../controllers/comment.controller");
    
    app.get("/comments", comments.getByArticleId);
    app.post("/comments", comments.create);
}