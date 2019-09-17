import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {

    constructor(private httpClient: HttpClient) {

    }

    readonly url = 'https://reembolso.digisystem.com.br/api/login/signin'

    auth(email: string, password: string) {
        const userData = {
            username: email,
            password: password
        }
        return this.httpClient.post(this.url, userData);
    }

}


