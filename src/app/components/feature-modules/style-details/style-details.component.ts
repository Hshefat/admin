import { Component } from '@angular/core';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { HeaderComponent } from '../../layouts/header/header.component';
import { MainComponent } from '../../layouts/main/main.component';
import { SideNavComponent } from '../../layouts/side-nav/side-nav.component';

@Component({
  selector: 'app-style-details',
  standalone: true,
  imports: [HeaderComponent, SideNavComponent,MainComponent, FooterComponent],
  templateUrl: './style-details.component.html',
  styleUrl: './style-details.component.scss'
})
export class StyleDetailsComponent {

}
