import { Component } from '@angular/core';
import { TopWidgetsComponent } from '../../dashboard/top-widgets/top-widgets.component';
import { ChartsComponent } from '../../dashboard/charts/charts.component';
import { PiChartsComponent } from '../../dashboard/pi-charts/pi-charts.component'; 
import { ModulesComponent } from '../../dashboard/modules/modules.component';
import { FeaturesComponent } from '../../dashboard/features/features.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TopWidgetsComponent, ChartsComponent, PiChartsComponent, ModulesComponent, FeaturesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
