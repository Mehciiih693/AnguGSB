import { Component, OnInit } from '@angular/core';
import {FichefraisService} from "../service/fichefrais.service";
import {EtatService} from "../service/etat.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Fraishf} from "../metier/fraishf";
import {FraishorsforfaitService} from "../service/fraishorsforfait.service";

@Component({
  selector: 'app-ajouterfraishf',
  templateUrl: './ajouterfraishf.component.html',
  styleUrls: ['./ajouterfraishf.component.css']
})
export class AjouterfraishfComponent implements OnInit {

  public unFraisHF: Fraishf = new Fraishf();
  public fraisid: number = 0;
  public titre: string = "Ajout d'un frais hors forfait";
  public error: string = "";
  public id: number = 0;

  constructor( private unFHF: FraishorsforfaitService,
               private activatedRoute: ActivatedRoute,
               private unRouteur: Router) { }

  ngOnInit(): void {
    let idTemp = this.activatedRoute.snapshot.paramMap.get('id');
    this.fraisid = Number(idTemp);
    this.titre += ''+this.fraisid;
  }

  valider(): void {
    this.unFraisHF.id_frais = this.fraisid;

    this.unFHF.ajoutFraisHF(this.unFraisHF).subscribe(
      ()=>{
      },
      (error)=>{
        this.error = error.messages;
      }
    );
    if (this.error != '')
      alert("Erreur survenue "+this.error);
    else
      alert("Ajout réussi !");
    this.unRouteur.navigate(['/accueil']);
  }

  annuler(): void {
    this.unRouteur.navigate(['/accueil']);
  }
}
