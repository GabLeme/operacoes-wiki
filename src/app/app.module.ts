
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule } from 'ng-uikit-pro-standard';
import { HeaderComponent } from './components/header/header.component';
import { ArticlesBoxsComponent } from './components/articles-boxs/articles-boxs.component';
import { MainComponent } from './pages/main/main.component';
import { ReadArticleComponent } from './pages/read-article/read-article.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { AppRoutingModule } from 'src/core/app-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesBoxsComponent,
    MainComponent,
    ReadArticleComponent,
    CreateArticleComponent,
    LoginComponent
  ],
  imports: [
    CKEditorModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastModule.forRoot(),
    MDBBootstrapModulesPro.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
        