import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../models/user';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl: string = environment.apiEndpoint + '/auth/validateLogin';
  constructor(
    private httpClient: HttpClient
  ) {}

  name: string;
  password: number;

  authenticate(username, password) {
    this.name = username;
    this.password = password;
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.httpClient.get<User>(this.baseUrl, {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          return userData;
        }
      )
    );
  }
  getCurrentUserAsHttpHead() {
    return new HttpHeaders({Authorization: 'Basic ' + btoa(this.name + ':' + this.password)});
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    return !(user === null);
  }
  logOut() {
    sessionStorage.removeItem('username');
  }
}
