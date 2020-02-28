import {RouterModule ,Routes} from '@angular/router'
import { HomeComponent } from './home/home.component'
import { BuscarComponent } from './buscar/buscar.component';
import { ArtistComponent } from './artist/artist.component';



const APP_ROUTE : Routes = [
    {path : 'home' , component : HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'buscar', component: BuscarComponent},
    {path: 'artist/:id' , component:ArtistComponent}
];
    


export const app_routing = RouterModule.forRoot(APP_ROUTE)