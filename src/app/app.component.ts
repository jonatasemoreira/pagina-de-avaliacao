import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexFill,
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [400, 448, 470, 540, 580, 690],
          color: "#ffc007"
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["black"]
        },
        enabledOnSeries: undefined,
        dropShadow: {
          enabled: false
        }
      }
    };
  }

  //Abrir menu mobile
  show: boolean = false;
  
  abrirFecharMenuMobile: string = "Abrir";

  abrirMobile() {
    this.show =! this.show;
    if (this.abrirFecharMenuMobile == "Abrir") {
      this.abrirFecharMenuMobile = "Fechar";
    } else {
      this.abrirFecharMenuMobile = "Abrir";
    }
  }
  
}