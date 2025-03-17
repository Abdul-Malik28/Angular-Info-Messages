import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  // imports: [AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent {
  // messages = input.required<string[]>();
  private messagesService = inject(MessagesService);

  // private cdRef = inject(ChangeDetectorRef);

  // private destroyRef = inject(DestroyRef);

  // // messages = this.messagesService.allMessages;
  // // get messages() {
  // //   return this.messagesService.allMessages;
  // // }

  // messages: string[] = [];

  // ngOnInit() {
  //   const subscribtion = this.messagesService.messages$.subscribe((messages) => {
  //     this.messages = messages;
  //     this.cdRef.markForCheck();
  //   });

  //   this.destroyRef.onDestroy(() => {
  //     subscribtion.unsubscribe();
  //   });
  // }

  // messages$ = this.messagesService.messages$;

  messages = this.messagesService.allMessages;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
