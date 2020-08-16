import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Message} from '../models/message';
import {environment} from '../environments/environment';
import {AuthenticationService} from './authentication.service';

@Injectable( {providedIn: 'root' })
export class MessageService {

  private baseUrl: string = environment.apiEndpoint + '/api/message';

    constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }
  getAllMessage(): Observable<Message[]> {
    const headers = this.authenticationService.getCurrentUserAsHttpHead();
    return this.http.get<Message[]>(this.baseUrl, {headers});
  }
  postMessage(message: Message): void {
    const headers = this.authenticationService.getCurrentUserAsHttpHead();
    const authorId = message.authorId;
    const text = message.text;
    this.http.post(this.baseUrl + '/post/', {authorId, text}, {headers}).subscribe(data => {
      alert('Message sent');
    });
  }
  getById(id: number): Observable<Message[]>  {
    const headers = this.authenticationService.getCurrentUserAsHttpHead();
    return this.http.get<Message[]>(this.baseUrl + '/get/' + id, {headers});
  }
}
