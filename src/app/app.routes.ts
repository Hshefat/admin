import { Routes } from '@angular/router'; 
import { MainComponent } from './components/layouts/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/layouts/notfound/notfound.component';
import { StyleDetailsComponent } from './components/feature-modules/style-details/style-details.component';

export const routes: Routes = [
    
    { path: 'main', component: MainComponent },
    { path: 'style', component: StyleDetailsComponent },
   
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent },
    
];
