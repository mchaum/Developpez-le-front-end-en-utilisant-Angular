import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgChartsModule } from 'ng2-charts';
import { OlympicPieChartComponent } from './components/pie-chart/pie-chart.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  // Ajout de NgChartsModule pour pouvoir utiliser les components de ng2-charts dans l'app et créer le diagramme de type "pie" //
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, NgChartsModule, OlympicPieChartComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
