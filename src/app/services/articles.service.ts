import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ArticlesService {

  constructor(private httpClient: HttpClient) {

  }

  readonly url = 'http://localhost:8000/articles'

  create(article: any) {
    return this.httpClient.post(this.url, article);
  }

  findAll() {
    return this.httpClient.get(this.url);
  }

  findByTool(toolName: string) {
    return this.httpClient.get(this.url + `/filter?nomeFerramenta=${toolName}`);
  }
}


