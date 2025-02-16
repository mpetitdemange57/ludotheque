import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {HeaderComponent} from "../../shared/header.component";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatOption, MatSelect} from "@angular/material/select";
import {UtilisateursService} from "../../shared/services/utilisateurs.service";
import {MatDatepicker, MatDatepickerInput, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JeuxService} from "../../shared/services/jeux.service";
import { LocationStrategy} from '@angular/common'

@Component({
  selector: 'app-ajout-jeux',
    imports: [
        MatFormField,
        MatInput,
        MatButton,
        MatLabel,
        HeaderComponent,
        MatCard,
        MatCardContent,
        MatSelect,
        MatOption,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatDatepicker,
        MatHint,
        MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule
    ],
  templateUrl: './ajout-jeux.component.html',
  styleUrl: './ajout-jeux.component.css',
})
export class AjoutJeuxComponent {

    formulaire: FormGroup;

    constructor(private readonly utilisateurService: UtilisateursService,
                private readonly jeuxService: JeuxService,
                public readonly location: LocationStrategy) {
        this.formulaire = new FormGroup({
            'titre': new FormControl(null, [Validators.required, Validators.minLength(2)]),
            'proprietaire': new FormControl(null, Validators.required),
            'emprunteur': new FormControl(null),
            'dateEmprunt': new FormControl(new Date())
        })
        utilisateurService.findAll();
    }

    getListUtilisateurs(){
        return this.utilisateurService.listUtilisateurs()
    }

    sauvegarder(){
        if(this.formulaire.status == "VALID"){
            this.jeuxService.save(this.formulaire.value)
        }
    }

    annuler= () => this.location.back();
}
