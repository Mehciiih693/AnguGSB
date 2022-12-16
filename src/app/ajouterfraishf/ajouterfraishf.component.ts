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

  private unFraisHF: Fraishf = new Fraishf();
  private fraisid: number = 0;
  private titre: string = "Ajout d'un frais hors forfait";
  private error: string = "";
  private id: number = 0;

  constructor( private unFHF: FraishorsforfaitService,
               private activatedRoute: ActivatedRoute,
               private unRouteur: Router) { }

  ngOnInit(): void {
    let idTemp = this.activatedRoute.snapshot.paramMap.get('id');
    this.fraisid = Number(idTemp);
    this.titre += ''+this.fraisid;
  }

}
