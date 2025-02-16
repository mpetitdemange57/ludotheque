import {Component, computed, Input} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {HeaderComponent} from "../../shared/header.component";
import {MatCard, MatCardContent} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {UtilisateursService} from "../../shared/services/utilisateurs.service";
import {UtilisateurDto} from "../../../../../../libs/contrat/UtilisateurDto";
import {LocationStrategy, UpperCasePipe} from "@angular/common";
import {TypeForm} from "../TypeForm";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-ajout-utilisateur',
    imports: [
        MatFormField,
        MatInput,
        MatButton,
        MatLabel,
        HeaderComponent,
        MatCard,
        MatCardContent,
        FormsModule
    ],
  templateUrl: './ajout-utilisateur.component.html'
})
export class AjoutUtilisateurComponent {

    form: UtilisateurDto = {}

    @Input()
    set id(id: string) {
        if(id == null){
            this.utilisateursService.utilisateurAEditer$$.next({});
            return;
        }
        this.utilisateursService.findById(id);
    }

    @Input()
    type: TypeForm | undefined;


    constructor(private readonly utilisateursService: UtilisateursService,
                private readonly location:LocationStrategy,
                private readonly snackBar:  MatSnackBar) {
        this.utilisateursService.utilisateurAEditer$.subscribe(utilisateurAMettreAJour => this.form = utilisateurAMettreAJour);
    }

    sauvegarder(){
        this.utilisateursService.save(this.form)
            .subscribe(() => {
                this.snackBar.open("Utilisateur sauvegardé", "Fermer", {duration: 1000})
                this.location.back();
            })
    }

    annuler = () => this.location.back();
}
