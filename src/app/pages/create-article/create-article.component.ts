import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { ArticlesService } from 'src/app/services/articles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  public Editor = ClassicEditor;
  nomeFerramenta: String;
  tituloArtigo: String;
  autor: String;
  public model = {
    editorData: ''
  }
  constructor(private ArticleService: ArticlesService) { }

  ngOnInit() {
  }

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  public onChange({ editor }: ChangeEvent) {
    const data = editor.getData();
  }

  save() {
    const article = {
      nomeFerramenta: this.nomeFerramenta.toLowerCase(),
      tituloArtigo: this.tituloArtigo,
      conteudoArtigo: this.model.editorData,
      autor: localStorage.getItem('userName'),
      dataCriacao: Date.now()
    }

    this.ArticleService.create(article).subscribe((r) => {
      Swal.fire({
        type: "success",
        title: "Artigo criado com sucesso."
      })
      this.nomeFerramenta = '';
      this.tituloArtigo = '';
      this.model.editorData = '';
    }, 
    (err) => {
      Swal.fire({
        type: 'error',
        title: err
      })
    })
  }

}
