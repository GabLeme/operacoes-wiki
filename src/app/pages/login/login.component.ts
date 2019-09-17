import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService, private router: Router) { }
  username: string = '';
  password: string = '';
  hasError: string = '';
  ngOnInit() {
  }

  doLogin() {
    this.LoginService.auth(this.username, this.password).subscribe((r) => {
      if (r['statusLogin'] === 'true') {
        localStorage.setItem('userName', r['dadosUsuario']['nomeUsuario']);
        this.router.navigate(['/main']);
      }
      else {
        this.hasError = "Usuário inválido."
      }
    })
  }

}
