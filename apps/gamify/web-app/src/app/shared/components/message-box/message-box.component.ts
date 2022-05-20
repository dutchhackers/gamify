import { Component, Input, OnInit } from '@angular/core';
import { map, Subject } from 'rxjs';

@Component({
  selector: 'coders-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  @Input() message$: Subject<string|string[]> | undefined;
  @Input() message: string|string[]|undefined;

  // TODO: Add different types of messages, e.g. success, error, warning, info

  messages: string[] = [];

  ngOnInit(): void {
    if (this.message) {
      this.messages = this.tranformMessage(this.message);
    }
    this.message$?.pipe(
      map((message) => this.tranformMessage(message)),
    ).subscribe((messages: string[]) => {
      this.messages = messages;
    });
  }

  private tranformMessage(message: string|string[]): string[] {
    if (Array.isArray(message)) {
      return message;
    }
    return [message];
  }
}
