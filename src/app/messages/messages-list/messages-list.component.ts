import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit {
  // messages = input.required<string[]>();
  private messagesService = inject(MessagesService);

  private cdRef = inject(ChangeDetectorRef);

  // messages = this.messagesService.allMessages;
  get messages() {
    return this.messagesService.allMessages;
  }

  ngOnInit() {
    this.messagesService.messages$.subscribe(() => {
      this.cdRef.markForCheck();
    });
  }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
