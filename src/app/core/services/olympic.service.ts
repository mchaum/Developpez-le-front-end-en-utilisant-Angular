import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// Import du modèle OlympicCountry, et par défaut Participation qui est compris dedans //
import { OlympicCountry } from '../models/Olympic'; 

@Injectable({
  providedIn: 'root',
})
export class OlympicService {
  private olympicUrl = './assets/mock/olympic.json';
  // Ajout de OlympicCountry à la place de "any" //
  private olympics$ = new BehaviorSubject<OlympicCountry[] | null | undefined>(undefined);

  constructor(private http: HttpClient) {}

  loadInitialData() {
    // Ajout de OlympicCountry à la place de "any" //
    return this.http.get<OlympicCountry[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        // TODO: improve error handling
        console.error(error);
        // can be useful to end loading state and let the user know something went wrong
        this.olympics$.next(null);
        return caught;
      })
    );
  }

  getOlympics() {
    return this.olympics$.asObservable();
  }
}
