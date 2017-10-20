import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonsModule} from './commons/commons.module';
import { appRoutingProviders, routing } from './main-app/routes/app.routes';
import { MainComponent } from './main-app/components/main/main.component';
import { HomeComponent } from './main-app/components/home/home.component';
import { CommonsloginComponent } from './main-app/components/login/login.component';


@NgModule({
  imports: [ BrowserModule, CommonModule, CommonsModule, FormsModule, HttpModule, routing  ],
  exports: [],
  declarations: [ MainComponent, HomeComponent, CommonsloginComponent ],
  providers: [
    appRoutingProviders
  ],
  bootstrap:    [ MainComponent ]
})
export class AppModule { }
