import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraphicsService } from '../../services/graphics.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  public color: Color[] = [{ backgroundColor: [] }];

  constructor(private graphicService: GraphicsService) {}

  ngOnInit(): void {
    /* this.graphicService.getSocialUsers().subscribe((graphic) => {
      this.doughnutChartLabels = Object.keys(graphic);
      this.doughnutChartData.push(Object.values(graphic));
    }); */
    this.graphicService
      .getSocialUsersDonaData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      });
  }
}
