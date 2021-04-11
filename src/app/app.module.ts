import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { AppCommentComponent } from './comment/app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CommentTree } from "./comment/comments/comment-tree.component";

@NgModule({
  declarations: [
    AppComponent,
 
    LoginComponent,
    AppCommentComponent,
    BsNavbarComponent,
    RegisterComponent,
    
    CommentTree
  ],
  imports: [
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        
        { path: 'login', component: LoginComponent },
        { path: 'comments', component: AppCommentComponent },
        { path: 'sign-up', component: RegisterComponent },
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
