import { Component, OnInit } from '@angular/core';
import {Message} from '../../models/message';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  message: Message = new Message('', '');

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
  }

  sendMessage(): void {
    console.log(this.message.authorId)
    console.log(this.message.text)
    this.messageService.postMessage(
      new Message(
        this.message.authorId,
        this.message.text,
        )
    );
  }
}
