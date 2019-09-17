import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ArticlesBoxsComponent } from 'src/app/components/articles-boxs/articles-boxs.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private ArticlesService: ArticlesService, private router: Router) { }
  toolName: string = '';
  ngOnInit() {

  }

  findArticleByToolName() {
    this.ArticlesService.findByTool(this.toolName.toLowerCase()).subscribe(r => {
      console.log(r)
    })
  }

}
