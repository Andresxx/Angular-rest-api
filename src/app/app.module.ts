import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RepositoriComponent } from './repositori/repositori.component';

import {ApiService} from "./services/api.service";
import {UserService} from "./services/user.service";
import { ListOfRepositoriesComponent } from './list-of-repositories/list-of-repositories.component';


import{app_routing} from"./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    RepositoriComponent,
    ListOfRepositoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
