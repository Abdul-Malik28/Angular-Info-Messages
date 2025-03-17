import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewMessageComponent {
  // add = output<string>();
  private messagesService = inject(MessagesService);

  // enteredText = signal('');   // no matter if it is signal or not
  enteredText = '';

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  onSubmit() {
    // this.add.emit(this.enteredText());
    // this.messagesService.addMessage(this.enteredText());
    this.messagesService.addMessage(this.enteredText);

    // this.enteredText.set('');
    this.enteredText = '';
  }
}
