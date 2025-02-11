import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/header.component";

@Component({
  selector: 'app-accueil',
    imports: [
        HeaderComponent
    ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {

}
