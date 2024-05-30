import { Component, Input, OnInit } from '@angular/core';
import { CharacterDTO } from '../../Models/character.dto';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  @Input({ required: true }) characters!: CharacterDTO[];

  //We define which columns are in our angular material table
  displayedColumns: string[] = ['photo', 'name', 'gender'];

  constructor() {
    this.characters = [];
  }

  ngOnInit(): void {}
}
