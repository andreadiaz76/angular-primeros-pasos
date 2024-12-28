import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroNames:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Superman'];
public lastDeletedHero?:string;

public removeLastHero():void {
  this.lastDeletedHero = this.heroNames.pop();
}
}
