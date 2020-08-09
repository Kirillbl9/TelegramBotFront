import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Message} from '../models/message';

@Injectable( {providedIn: 'root' })
export class MessageService {
  private baseUrl = 'http://localhost:8080/api/message';
  constructor(private http: HttpClient) {
  }
  getAllMessage(): Observable<Message[]> {
    return this.http.get<Message[]>(this.baseUrl);
  }
  postMessage(message: Message): void {
    const authorId = message.authorId;
    const text = message.text;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(this.baseUrl + '/post/', {authorId, text}).subscribe(data => {
      alert('Message sent');
    });
  }
  getById(id: number): Observable<Message[]>  {
    return this.http.get<Message[]>(this.baseUrl + '/get/' + id);
  }
}
