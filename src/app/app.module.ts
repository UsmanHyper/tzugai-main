import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainRoutingModule } from './main-page/main-routing.module';
import { RouterModule } from '@angular/router';
import { MainformModule } from './main-page/main.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    MainformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
