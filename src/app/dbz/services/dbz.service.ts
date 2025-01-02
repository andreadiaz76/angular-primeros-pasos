import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {  v4 as uuid} from 'uuid';


console.log({ uuid });
@Injectable({
  providedIn: "root"
})
export class DbzService {
  constructor() {}
  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 7500
    }
  ];

  // constructor() {}

  onNewCharacter(character: Character): void {

    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.characters = this.characters.filter(char => char.id !== id);
    // console.log({index});
  }
}
