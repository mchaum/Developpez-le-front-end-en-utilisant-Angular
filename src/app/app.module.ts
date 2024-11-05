import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OlympicPieChartComponent } from './components/pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MedalChartComponent } from './components/medal-chart/medal-chart.component';
import { CountryDetailComponent } from './pages/country-detail/country-detail.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, OlympicPieChartComponent, MedalChartComponent, CountryDetailComponent],
  // Ajout de NgxChartsModule pour pouvoir utiliser les components de ngx-charts dans l'app et créer le diagramme de type "pie" //
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HttpClientModule, NgxChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
