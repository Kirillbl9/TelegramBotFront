import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';
import {CookieService} from 'angular2-cookie/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(private router: Router,
              private authenticationService: AuthenticationService, private cookieService: CookieService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.authenticationService.authenticate(this.username, this.password).subscribe(
      data => {
        this.cookieService.put('username', this.username);
        this.router.navigate(['']);
      }
    );
  }

  logOut() {
    this.authenticationService.logOut();
    this.router.navigate(['login']);
    this.cookieService.removeAll();
  }
}
