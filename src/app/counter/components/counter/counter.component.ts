import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-counter",
  template: `<h1>{{title}}</h1>
<hr>
<p>Counter: {{counter}}</p>

<button (click)="increaseBy(-1)">-1</button>
<button (click)="reset()">reset</button>
<button (click)="increaseBy(1)">+1</button>`,
  standalone: false
})
export class CounterComponent {
  constructor() {}

  public title: string = "Hola mundo";
  public counter: number = 10;

  increaseBy(cant: number): void {
    this.counter += cant;
  }

  reset(): void {
    this.counter = 10;
  }
}
