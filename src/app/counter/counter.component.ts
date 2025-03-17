import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  // private zone = inject(NgZone);

  // count = signal(0);

  count = 0;

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  ngOnInit() {
    setTimeout(() => {
      // this.count.set(0);
      console.log('before reset');
      this.count = 0
      console.log('after reset');
    }, 4000);

    // setTimeout(() => {
    //   console.log('Timer expired!');
    // }, 5000);  

    // ---Avoiding Zone Pollution--- //
    // this.zone.runOutsideAngular(() => {
    //   setTimeout(() => {
    //     console.log('Timer expired!');
    //   }, 5000);
    // });

    // ---No need to Avoide Zone Pollution--- //
    // this.zone.runOutsideAngular(() => {
    setTimeout(() => {
      console.log('Timer expired!');
    }, 5000);
    // });
  }

  onDecrement() {
    // this.count.update((prevCount) => prevCount - 1);
    this.count = this.count - 1;
  }

  onIncrement() {
    // this.count.update((prevCount) => prevCount + 1);
    this.count = this.count + 1;
  }
}
