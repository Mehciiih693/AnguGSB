import { Component, OnInit } from '@angular/core';
import {Fichefrais} from '../metier/fichefrais';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import {FichefraisService} from "../service/fichefrais.service";
import {Etat} from "../metier/etat";
import {EtatService} from "../service/etat.service";

@Component({
  selector: 'app-fichefrais',
  templateUrl: './fichefrais.component.html',
  styleUrls: ['./fichefrais.component.css']
})
export class FichefraisComponent implements OnInit {

  private unFrais: Fichefrais = new Fichefrais;
  private fraisid: number = 0;
  private titre: string = "Modification d'un frais";
  private paramMap!: ParamMap;
  private error: string = '';
  private unEtat: Etat = new Etat();
  private mesEtats: Etat[] = [];

  constructor(private unFS: FichefraisService,
              private unES: EtatService,
              private activatedRoute: ActivatedRoute,
              private unRouteur: Router) {
  }

  ngOnInit(): void {

    // @ts-ignore
    this.fraisid = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getFichefrais(this.fraisid);
    this.getEtat();
  }

  getFichefrais(id:number): void {
    this.unFS.getFicheFrais(id).subscribe(
      (Fichefrais)=>{
        this.unFrais = Fichefrais;
      },
      (error)=>{
        this.error=error.messages;
      }
    )
  }

  getEtat(): void {
    this.unES.getListeEtat().subscribe(
      (mesEtats) => {
        this.mesEtats = mesEtats;
      },
        (error) => {
        this.error = error.messages;
      }
    )
  }

}
