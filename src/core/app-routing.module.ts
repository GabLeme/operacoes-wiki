import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from 'src/app/pages/main/main.component';
import { CreateArticleComponent } from 'src/app/pages/create-article/create-article.component';
import { ReadArticleComponent } from 'src/app/pages/read-article/read-article.component';
import { LoginComponent } from 'src/app/pages/login/login.component';


const routes: Routes = [
    { path: 'main', component: MainComponent},
    { path: 'create-article', component: CreateArticleComponent},
    { path: 'read-article/:id', component: ReadArticleComponent},
    { path: 'login', component: LoginComponent}
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
