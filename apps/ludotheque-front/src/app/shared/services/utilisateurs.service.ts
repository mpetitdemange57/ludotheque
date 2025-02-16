import {computed, Injectable, signal} from '@angular/core';
import {JeuDto} from "../../../../../../libs/contrat/JeuDto";
import {UtilisateurDto} from "../../../../../../libs/contrat/UtilisateurDto";
import {DataService} from "./data.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UtilisateursService {

    private readonly PATH = '/utilisateurs'

    utilisateurAEditer$$ = new BehaviorSubject<UtilisateurDto>({})
    utilisateurAEditer$ = this.utilisateurAEditer$$.asObservable();

    listUtilisateurs = signal<Array<UtilisateurDto>>([])

    constructor(private readonly dataService: DataService) {}

    findAll() {
        this.dataService
            .sendGetRequest<Array<UtilisateurDto>>(this.PATH)
            .subscribe((utilisateurs) => this.listUtilisateurs.set(utilisateurs))
    }

    save(form: UtilisateurDto) {
        return this.dataService.sendPostRequest(this.PATH, form);
    }

    delete(id: number) {
        return this.dataService.sendDeleteRequest(this.PATH + "/" + id)
    }

    findById(id: string) {
        this.dataService.sendGetRequest<UtilisateurDto>(this.PATH + "/" + id)
            .subscribe((value) => this.utilisateurAEditer$$.next(value));
    }
}
