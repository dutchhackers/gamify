import { Component, Input, OnInit } from '@angular/core';
import { map, Subject } from 'rxjs';

@Component({
  selector: 'coders-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  @Input() message$: Subject<string|string[]> | undefined;

  // TODO: Add different types of messages, e.g. success, error, warning, info

  messages: string[] = [];

  ngOnInit(): void {
    this.message$?.pipe(
      map((message) => {
        if (Array.isArray(message)) {
          return message;
        } else {
          return [message];
        }
      }),
    ).subscribe((messages: string[]) => {
      this.messages = messages;
    });
  }

}
