import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page01Component } from './page01/page01.component';
import { Page02Component } from './page02/page02.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StripComponent } from './strip/strip.component';

@NgModule({
  declarations: [
    AppComponent,
    Page01Component,
    Page02Component,
    NavBarComponent,
    StripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
