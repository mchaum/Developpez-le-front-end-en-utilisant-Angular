// pie-chart.component.ts
import { Component, OnInit } from '@angular/core';
import { OlympicService } from '../../core/services/olympic.service';
import { OlympicCountry } from '../../core/models/Olympic';
import { ChartData } from 'chart.js'; 
import { NgChartsModule } from 'ng2-charts';

@Component({
  standalone: true,
  selector: 'app-olympic-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  imports: [NgChartsModule],
})
export class OlympicPieChartComponent implements OnInit {
  public pieChartLabels: string[] = [];
  public pieChartData: ChartData<'pie'>;
  public pieChartType: 'pie' = 'pie';

  constructor(private olympicService: OlympicService) {
    this.pieChartData = {
      labels: [],
      datasets: [{ data: [] }],
    };
  }

  ngOnInit(): void {
    this.olympicService.getOlympics().subscribe((data) => {
      if (data) {
        this.prepareChartData(data);
      }
    });
  }

  private prepareChartData(olympicCountries: OlympicCountry[]): void {
    this.pieChartLabels = olympicCountries.map(country => country.country);
    const medalsData = olympicCountries.map(country =>
      country.participations.reduce((sum, participation) => sum + participation.medalsCount, 0)
    );

    this.pieChartData.labels = this.pieChartLabels;
    this.pieChartData.datasets[0].data = medalsData;
  }
}

