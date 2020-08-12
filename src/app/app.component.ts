import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './service/authentication.service';
import {CookieService} from 'angular2-cookie/core';
import {LoginComponent} from './components/login/login.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'employee-management';

  constructor(private authenticationService: AuthenticationService,
              private cookieService: CookieService,
              private router: Router) {
    if (cookieService.get('username')) {
      this.authenticationService.authenticate(cookieService.get('username'), '12345').subscribe(
        data => {
          this.router.navigate(['']);
        }
      );
    }
  }

  ngOnInit(): void {
  }
}
