import { Component, OnInit } from '@angular/core';
import { filter, Observable, of, Subscription } from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import { OlympicCountry } from 'src/app/core/models/Olympic';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<OlympicCountry[]> = of([]);
  country: OlympicCountry | undefined;
  totalParticipations: number = 0;
  private subscription: Subscription | null = null;

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    // Utilisation de `pipe` et `filter` de RxJs pour ne garder que les valeurs non-nulles et non-undefined //
    this.olympics$ = this.olympicService.getOlympics().pipe(
      filter((countries): countries is OlympicCountry[] => !!countries)
    );
    this.olympics$.subscribe((countries) => {
      if (countries) {
        const uniqueYears = new Set<number>(); // Set pour éliminer les doublons //

        countries.forEach((country) => {
          country.participations.forEach((participation) => {
            uniqueYears.add(participation.year);
          });
        });

        this.totalParticipations = uniqueYears.size;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
