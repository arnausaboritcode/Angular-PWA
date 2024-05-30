import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ApiResponseDTO, CharacterDTO } from '../../Models/character.dto';
import { CharactersService } from '../../Services/characters.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrl: './component-list.component.scss',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0.2,
        })
      ),
      transition('void <=> *', animate(1500)),
    ]),
  ],
})
export class ComponentListComponent implements OnInit {
  characters: CharacterDTO[];

  showCards: boolean;
  showList: boolean;

  //spinner
  spinner: boolean;

  constructor(private charactersService: CharactersService) {
    this.characters = [];
    this.showCards = true;
    this.showList = false;
    this.spinner = false;
  }

  ngOnInit(): void {
    this.charactersService
      .getAllCharacters()
      .subscribe((characters: ApiResponseDTO) => {
        this.characters = characters.results;
      });

    this.charactersService.spinner$.subscribe((value: boolean) => {
      this.spinner = value;
    });
  }

  toggleShowCards(): void {
    this.showCards = true;
    this.showList = false;
  }

  toogleShowList(): void {
    this.showList = true;
    this.showCards = false;
  }
}
