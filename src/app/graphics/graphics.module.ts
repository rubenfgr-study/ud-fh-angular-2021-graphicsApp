import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleComponent } from './pages/double/double.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraphicBarComponent } from './components/graphic-bar/graphic-bar.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarsComponent,
    DoubleComponent,
    DonaComponent,
    DonaHttpComponent,
    GraphicBarComponent,
  ],
  imports: [CommonModule, GraphicsRoutingModule, ChartsModule],
})
export class GraphicsModule {}
