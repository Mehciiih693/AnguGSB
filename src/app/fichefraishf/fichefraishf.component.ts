import { Component, OnInit } from '@angular/core';
import {Fraishf} from "../metier/fraishf";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FraishorsforfaitService} from "../service/fraishorsforfait.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-fichefraishf',
  templateUrl: './fichefraishf.component.html',
  styleUrls: ['./fichefraishf.component.css']
})
export class FichefraishfComponent implements OnInit {

  public unFraisHF: Fraishf = new Fraishf;
  public fraishfid: number = 0;
  public titre: string = "Modification d'un frais hors forfait";
  public paramMap!: ParamMap;
  public error: string = '';
  public id: number = 0;


  constructor(private unFHF: FraishorsforfaitService,
              private activatedRoute: ActivatedRoute,
              private unRouteur: Router) {

  }

  ngOnInit(): void {

    let test = this.activatedRoute.snapshot.paramMap.get('id');
    this.fraishfid=Number(test);
    this.getFichefraishf(this.fraishfid);
    this.titre += ' '+this.fraishfid;
  }

  getFichefraishf(id: number): void {
    this.unFHF.getFicheFraisHF(id).subscribe(
      (unfraisHF) => {
        this.unFraisHF = unfraisHF;
      },
      (error) => {
        this.error = error.messages;
      }
    );
  }

  valider(): void {
    this.unFHF.updateFraisHF(this.unFraisHF).subscribe(
      ()=> {
      },
      (error) => {
        this.error = error.messages;
      }
    );
    if (this.error != '')
      alert("Erreur survenue "+ this.error);
    else
      alert("Modification réussie !");
    this.unRouteur.navigate(['/accueil']);
  }

  annuler(): void {
    this.unRouteur.navigate(['/accueil']);
  }
}
