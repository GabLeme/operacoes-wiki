import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-read-article',
  templateUrl: './read-article.component.html',
  styleUrls: ['./read-article.component.scss']
})
export class ReadArticleComponent implements OnInit {

  article: any;
  comments: any;
  newComment: any;

  constructor(private CommentsService: CommentsService) { 
    this.newComment = {
      autor: 'Autor Teste',
      idArtigo: '',
      comentario: ''
    }
  }


  ngOnInit() {
    this.article = JSON.parse(localStorage.getItem('article'));
    let content = document.getElementById('conteudo-artigo');
    content.innerHTML = this.article['conteudoArtigo'];
    this.getAllCommentsFromArticle(this.article['_id']);
  }

  getAllCommentsFromArticle(articleId: any) {
    this.CommentsService.findByArticleId(articleId).subscribe(r => {
      this.comments = r;
    })
  }

  addComment() {
    this.newComment.idArtigo = this.article['_id'];
    this.CommentsService.create(this.newComment).subscribe(r => {
      Swal.fire({
        type: 'success',
        title: 'Comentário adicionado.'
      })

      this.newComment.comentario = '';
      this.getAllCommentsFromArticle(this.newComment.idArtigo);
    })
  }

}
