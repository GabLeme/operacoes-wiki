import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles-boxs',
  templateUrl: './articles-boxs.component.html',
  styleUrls: ['./articles-boxs.component.scss']
})
export class ArticlesBoxsComponent implements OnInit {

  constructor(private ArticlesService: ArticlesService, private router: Router) { }
  articles: any;
  ngOnInit() {
    this.ArticlesService.findAll().subscribe((r) => {
      this.articles = r;
    })
  }

  seeArticle(article: any) {
    localStorage.setItem('article', JSON.stringify(article));
    this.router.navigate(['/read-article', article._id])
  }

}
