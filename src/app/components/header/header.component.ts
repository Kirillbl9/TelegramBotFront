import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: AuthenticationService, private loginComponent: LoginComponent) { }
  ngOnInit() {
  }

}
