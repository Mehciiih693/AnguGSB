import { Component, OnInit } from '@angular/core';
import {Fraishf} from "../metier/fraishf";
import {FraishorsforfaitService} from "../service/fraishorsforfait.service";
import {ActivatedRoute, Router} from "@angular/router";
import {generate} from "rxjs";

@Component({
  selector: 'app-listefraishorsforfait',
  templateUrl: './listefraishorsforfait.component.html',
  styleUrls: ['./listefraishorsforfait.component.css']
})
export class ListefraishorsforfaitComponent implements OnInit {
  private mesFraisHT: Fraishf[] = [];
  private visiteurid: number = 0;
  private titre: string = "";
  private id: number = 0;
  private error: string = "";
  private montantTotal: number = 0;
  private idFrais: number = 0;
  private unFraisHF: Fraishf = new Fraishf;

  constructor(private unSHF: FraishorsforfaitService,
              private activatedRoute: ActivatedRoute,
              private unRouteur: Router) {

  }

  ngOnInit(): void {
    this.error = '';
    this.montantTotal = 0;
    let item = localStorage.getItem('id');
    if (item != null){
      this.id = Number.parseInt(item);
    }
    this.titre = 'Liste des frais du visiteur '+this.id;
    if (this.activatedRoute.snapshot.paramMap.get('id') != null){
      // @ts-ignore
      this.visiteurid = +this.activatedRoute.snapshot.paramMap.get('id');
    }
    this.getListeFraisHorsForfait(this.visiteurid);
  }

  calculMontant(): void {
    for (let i = 0; i < this.mesFraisHT.length; i++) {
      let unFHF: Fraishf = this.mesFraisHT[i];
      this.montantTotal = this.montantTotal + (unFHF.montant_fraishorsforfait * 1.0);
    }
  }

  getListeFraisHorsForfait(id: number): void {
    this.unSHF.getFicheFraishorsforfaitListe(id).subscribe(
      (mesFHT) => {
        this.mesFraisHT = mesFHT;
        this.idFrais = this.mesFraisHT[0].id_frais;
        this.calculMontant();

      },
      (error) => {
        this.error = error.messages;
        alert(error.messages);
      }
    );
  }

  modifier(id: number): void {
    this.unRouteur.navigate(['/modifierFraishf/'+id]);
  }

}
