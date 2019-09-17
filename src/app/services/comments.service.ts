import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CommentsService {

    constructor(private httpClient: HttpClient) {

    }

    readonly url = 'http://localhost:8000/comments'


    findByArticleId(articleId: string) {
        return this.httpClient.get(this.url + `?idArtigo=${articleId}`);
    }

    create(comment: any){
        return this.httpClient.post(this.url, comment);
    }

}


