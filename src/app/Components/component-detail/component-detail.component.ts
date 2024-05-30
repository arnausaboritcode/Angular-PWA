import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterDTO } from '../../Models/character.dto';
import { CharactersService } from '../../Services/characters.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrl: './component-detail.component.scss',
})
export class ComponentDetailComponent implements OnInit {
  characterDetails!: CharacterDTO;

  //spinner
  spinner: boolean;

  //For open and close mat expansion panel
  panelOpenState = false;

  //Show/Hide all details
  showDetails: boolean;

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) {
    this.spinner = false;
    this.showDetails = false;
  }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.params['id'];

    this.charactersService
      .getCharacterById(identifier)
      .subscribe((character: CharacterDTO) => {
        this.characterDetails = character;
      });

    this.charactersService.spinner$.subscribe((value: boolean) => {
      this.spinner = value;
    });
  }

  //Go back page
  goBack(): void {
    this.location.back();
  }

  toggle(): void {
    this.showDetails = !this.showDetails;
  }
}
