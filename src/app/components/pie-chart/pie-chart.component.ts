import { Component, OnInit } from '@angular/core';
import { OlympicService } from '../../core/services/olympic.service';
import { OlympicCountry } from '../../core/models/Olympic';
import { Router } from '@angular/router';

@Component({
  selector: 'app-olympic-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class OlympicPieChartComponent implements OnInit {
  countries: OlympicCountry[] = [];
  pieChartData: { name: string; value: number }[] = []; // Nom (du pays) & Valeur (nbre de médailles) //

  constructor(private olympicService: OlympicService, private router: Router) {}

  ngOnInit(): void {
    // Récupération les données lors de l'initialisation //
    this.olympicService.getOlympics().subscribe(data => {
      if (data) {
        this.countries = data;
        this.preparePieChartData();
      }
    });
  }

  preparePieChartData(): void {
    const medalCounts: { [key: string]: number } = {};

    // Calcul du nombre total de médailles pour chaque pays //
    this.countries.forEach(country => {
      const totalMedals = country.participations.reduce((sum, participation) => sum + participation.medalsCount, 0);
      medalCounts[country.country] = totalMedals;
    });

    // Formater les données pour le pie chart //
    this.pieChartData = Object.keys(medalCounts).map(key => ({
      name: key,
      value: medalCounts[key]
    }));
  }

  // Création d'un évènement quand on clique sur un pays sur le diagramme //
  onSelect(event: { name: string; value: number }): void {
    const selectedCountryName = event.name;
    const selectedCountry = this.countries.find(c => c.country === selectedCountryName);
  
    if (selectedCountry) {
      // Redirection vers la page de détails du pays, créée en fonction de leur ID //
      this.router.navigate(['/country', selectedCountry.id]);
    }
  }
}
