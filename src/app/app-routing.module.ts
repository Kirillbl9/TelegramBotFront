import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import {MessageListComponent} from './components/message-list/message-list.component';
import {SendMessageComponent} from './components/send-message/send-message.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {FindPersonComponent} from './components/find-person/find-person.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGaurdService] },
  { path: 'send-message', component: SendMessageComponent, canActivate: [AuthGaurdService] },
  { path: 'message-list', component: MessageListComponent, canActivate: [AuthGaurdService] },
  { path: 'main-page', component: MainPageComponent, canActivate: [AuthGaurdService] },
  { path: 'find-person', component: FindPersonComponent, canActivate: [AuthGaurdService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
