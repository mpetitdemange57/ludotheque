import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/header.component";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-accueil',
  imports: [
    HeaderComponent
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss',
  host: {
    style: 'height: 100%; display: block; overflow:hidden;'
  }
})
export class AccueilComponent {

  presentation:string = "" +
      "Que vous soyez passionné de jeux de société, amateur de casse-têtes ou à la recherche d'activités ludiques pour toute la famille, notre ludothèque de prêt est le service idéal pour vous !\n\n" +
      "📚 Un vaste choix de jeux\n" +
      "Nous mettons à votre disposition une large sélection de jeux pour tous les âges et tous les goûts : jeux de stratégie, de coopération, d’ambiance, éducatifs et bien plus encore. Découvrez de nouveaux univers et partagez des moments inoubliables en famille ou entre amis !\n\n" +
      "🔄 Le prêt de jeux, comment ça marche ?\n" +
      "Empruntez vos jeux préférés pour une durée indéfinie et profitez-en tranquillement chez vous.\n\n" +
      "📍 Où nous trouver ?\n" +
      "Contactez Stan Geant !\n\n" +
      "Rejoignez-nous et plongez dans un monde de divertissement et de partage !\n\n" +
      "À très bientôt ! 🎭♟️🎯"

}
