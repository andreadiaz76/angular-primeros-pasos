import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Component({
  selector: "app-dbz-list",
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.css",
  standalone: false
})
export class ListComponent {
  @Output()
  public onDelete :EventEmitter<string> = new EventEmitter();

  @Input() public characterList: Character[] = [{ id:uuid(), name: "Trunk", power: 10 }];

  emitDeleteCharacter(id: string): void {
    // console.log({index});
    this.onDelete.emit(id);
  }
}
