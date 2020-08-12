import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import {SendMessageComponent} from './components/send-message/send-message.component';
import {MessageListComponent} from './components/message-list/message-list.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FindPersonComponent } from './components/find-person/find-person.component';
import {CookieService} from 'angular2-cookie/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SendMessageComponent,
    MessageListComponent,
    MainPageComponent,
    FindPersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [LoginComponent, { provide: CookieService, useFactory: cookieServiceFactory },],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function cookieServiceFactory() {
  return new CookieService();
}
