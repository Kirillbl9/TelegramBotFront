import {Component, NgZone, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Message} from '../../models/message';
import {MessageService} from '../../service/message.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  public messages: Message[] = [];

  constructor(public messageService: MessageService) {}
  ngOnInit(): void {
    this.messageService.getAllMessage().subscribe(elements => this.messages = elements.reverse());
  }

  reverse(): void {
    this.messages.reverse();
  }
}
