import {Component, computed, Input, signal} from '@angular/core';
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
import {JeuDto} from "../../../../../../libs/contrat/JeuDto";
import {TypeForm} from "../TypeForm";
import {UtilisateurDto} from "../../../../../../libs/contrat/UtilisateurDto";
import {toObservable} from "@angular/core/rxjs-interop";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  templateUrl: './ajout-jeux.component.html'
})
export class AjoutJeuxComponent {

    formulaire: FormGroup;

    @Input()
    set id(id: string) {
        if(id == null){
            this.jeuxService.jeuAEditer.set(null);
            return;
        }
        this.jeuxService.findById(id);
    }

    @Input()
    type: TypeForm | undefined;


    constructor(private readonly utilisateurService: UtilisateursService,
                private readonly jeuxService: JeuxService,
                private readonly location: LocationStrategy,
                private readonly snackBar: MatSnackBar) {
        this.formulaire = new FormGroup({
            'id': new FormControl(null),
            'titre': new FormControl(null, [Validators.required, Validators.minLength(2)]),
            'proprietaire': new FormControl(null),
            'emprunteur': new FormControl(null),
            'dateEmprunt': new FormControl(new Date())
        })
        utilisateurService.findAll();
        toObservable(this.jeuxService.jeuAEditer).subscribe(jeuAEditer => {
            debugger;
            if(jeuAEditer == null){
                this.formulaire.patchValue({});
                return;
            }
            this.formulaire.patchValue(jeuAEditer)
        })
    }

    getListUtilisateurs(){
        return this.utilisateurService.listUtilisateurs();
    }

    sauvegarder(){
        if(this.formulaire.status == "VALID"){
            this.jeuxService.save(this.formulaire.value)
                .subscribe(() => {
                    this.snackBar.open("Jeu sauvegardé","Fermer");
                    this.location.back();
                })

        }
    }

    annuler= () => this.location.back();

    compareUtilisateur(usr1: UtilisateurDto, usr2: UtilisateurDto) {
        return (usr1.id === usr2.id);
    }
}
