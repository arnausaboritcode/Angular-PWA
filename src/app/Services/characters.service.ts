import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, finalize } from 'rxjs';
import { ApiResponseDTO, CharacterDTO } from '../Models/character.dto';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  //spinner
  private spinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public spinner$: Observable<boolean> = this.spinner.asObservable();

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<ApiResponseDTO> {
    this.spinner.next(true);
    return this.http
      .get<ApiResponseDTO>('https://rickandmortyapi.com/api/character')
      .pipe(
        delay(1500),
        finalize(() => this.spinner.next(false))
      );
  }

  getCharacterById(id: number): Observable<CharacterDTO> {
    this.spinner.next(true);
    return this.http
      .get<CharacterDTO>('https://rickandmortyapi.com/api/character/' + id)
      .pipe(
        delay(1500),
        finalize(() => this.spinner.next(false))
      );
  }
}
