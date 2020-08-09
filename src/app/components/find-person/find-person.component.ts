import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-find-person',
  templateUrl: './find-person.component.html',
  styleUrls: ['./find-person.component.css']
})
export class FindPersonComponent implements OnInit {

  public messages: Message[] = [];
  public currentId: number;

  constructor(public messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  getById(): void {
    this.messageService.getById(this.currentId).subscribe(elements => this.messages = elements.reverse());
  }
}
