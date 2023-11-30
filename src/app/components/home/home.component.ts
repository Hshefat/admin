import { Component } from '@angular/core';
import { FooterComponent } from '../layouts/footer/footer.component';
import { HeaderComponent } from '../layouts/header/header.component';
import { MainComponent } from '../layouts/main/main.component';
import { SideNavComponent } from '../layouts/side-nav/side-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SideNavComponent,MainComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
