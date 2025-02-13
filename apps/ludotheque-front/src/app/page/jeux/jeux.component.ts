import {Component} from '@angular/core';
import {HeaderComponent} from "../../shared/header.component";
import {TableauJeuxComponent} from "./tableau-jeux/tableau-jeux.component";

@Component({
  selector: 'app-jeux',
    imports: [
        HeaderComponent,
        TableauJeuxComponent
    ],
  templateUrl: './jeux.component.html',
  styleUrl: './jeux.component.scss'
})
export class JeuxComponent {

}
