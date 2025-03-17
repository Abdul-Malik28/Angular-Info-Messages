import { Injectable, signal } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class MessagesService {
//   messages$ = new BehaviorSubject<string[]>([]);

//   // private messages = signal<string[]>([]);
//   private messages: string[] = [];

//   // allMessages = this.messages.asReadonly();
//   get allMessages() {
//     return [...this.messages];
//   }

//   addMessage(message: string) {
//     // this.messages.update((prevMessages) => [...prevMessages, message]);
//     this.messages = [...this.messages, message];

//     this.messages$.next([...this.messages]);
//   }
// }
@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  // messages$ = new BehaviorSubject<string[]>([]);

  // private messages = signal<string[]>([]);
  // private messages: string[] = [];

  private messages = signal<string[]>([]);

  // allMessages = this.messages.asReadonly();
  // get allMessages() {
  //   return [...this.messages];
  // }

  allMessages = this.messages.asReadonly();

  addMessage(message: string) {
    // // this.messages.update((prevMessages) => [...prevMessages, message]);
    // this.messages = [...this.messages, message];

    // this.messages$.next([...this.messages]);

    this.messages.update((oldMessages) => [...oldMessages, message]);
  }
}