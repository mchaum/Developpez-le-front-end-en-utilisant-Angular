import { Component, Input, OnChanges } from '@angular/core';
import { OlympicCountry } from '../../core/models/Olympic'; 

@Component({
  selector: 'app-medal-chart',
  templateUrl: './medal-chart.component.html',
  styleUrls: ['./medal-chart.component.scss']
})
export class MedalChartComponent implements OnChanges {
  @Input() country!: OlympicCountry;
  medalData: { name: string; series: { name: string; value: number }[] }[] = [];


  ngOnChanges(): void {
    this.prepareMedalData();
  }

  prepareMedalData(): void {
    if (this.country && this.country.participations) {
      this.medalData = [
        {
          name: this.country.country,
          series: this.country.participations.map(participation => ({
            name: participation.year.toString(),
            value: participation.medalsCount
          }))
        }
      ];
    }
    console.log(this.medalData)
  }
}
