import { Component, Input, OnInit } from '@angular/core';
import { CharacterDTO } from '../../Models/character.dto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input({ required: true }) character!: CharacterDTO;

  constructor() {}

  ngOnInit(): void {}
}
