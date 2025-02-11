import { Routes } from '@angular/router';
import {AccueilComponent} from "./page/accueil/accueil.component";
import {JeuxComponent} from "./page/jeux/jeux.component";
import {UtilisateursComponent} from "./page/utilisateurs/utilisateurs.component";

export const routes: Routes = [
    {path: 'accueil', component: AccueilComponent},
    {path: 'jeux', component: JeuxComponent},
    {path: 'utilisateurs', component: UtilisateursComponent},
    {path: '**', redirectTo: 'accueil' },
];
