import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'; 
import { OlympicService } from '../../core/services/olympic.service';
import { OlympicCountry } from '../../core/models/Olympic';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit, OnDestroy {
  country: OlympicCountry | undefined;
  totalMedals: number = 0;
  totalParticipations: number = 0;
  totalAthletes: number = 0;
  private subscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private olympicService: OlympicService) {}

  ngOnInit(): void {
    const countryId = +this.route.snapshot.paramMap.get('id')!;
    
    this.subscription = this.olympicService.getOlympics().subscribe(countries => {
      if (countries === null) {
        console.error('Erreur : Les données des pays sont indisponibles.');
      } else if (countries && countries.length > 0) {
        this.country = countries.find(c => c.id === countryId);
        if (this.country) {
          this.calculateCountryStats();
        } else {
          console.error(`Country with ID ${countryId} not found.`);
        }
      } else {
        console.log('En attente des données...');
      }
    });
  }
  

  ngOnDestroy(): void {
    // Unsubsribe l'obervable //
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
// Fonction pour calculer les stats d'un pays //
  calculateCountryStats(): void {
    if (this.country) {
      this.totalMedals = this.country.participations.reduce((sum, p) => sum + p.medalsCount, 0);
      this.totalParticipations = this.country.participations.length;
      this.totalAthletes = this.country.participations.reduce((sum, p) => sum + p.athleteCount, 0);
    }
  }
}
