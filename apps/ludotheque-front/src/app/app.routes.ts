import { Routes } from '@angular/router';
import {AccueilComponent} from "./page/accueil/accueil.component";
import {JeuxComponent} from "./page/jeux/jeux.component";
import {UtilisateursComponent} from "./page/utilisateurs/utilisateurs.component";
import {AjoutUtilisateurComponent} from "./forms/ajout-utilisateur/ajout-utilisateur.component";
import {AjoutJeuxComponent} from "./forms/ajout-jeux/ajout-jeux.component";

export const routes: Routes = [
    {path: 'accueil', component: AccueilComponent},
    {path: 'jeux', component: JeuxComponent},
    {path: 'jeux/ajout', component: AjoutJeuxComponent, data: {type: 'AJOUTER'}},
    {path: 'jeux/edit/:id', component: AjoutJeuxComponent, data: {type: 'EDITER'}},
    {path: 'utilisateurs', component: UtilisateursComponent},
    {path: 'utilisateurs/ajout', component: AjoutUtilisateurComponent, data: {type: 'AJOUTER'}},
    {path: 'utilisateurs/edit/:id', component: AjoutUtilisateurComponent, data: { type: 'EDITER'}},
    {path: '**', redirectTo: 'accueil' },
];
