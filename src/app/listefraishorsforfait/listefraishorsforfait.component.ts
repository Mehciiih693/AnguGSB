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
  public mesFraisHT: Fraishf[] = [];
  public visiteurid: number = 0;
  public titre: string = "";
  public id: number = 0;
  public error: string = "";
  public montantTotal: number = 0;
  public idFrais: number = 0;
  public unFraisHF: Fraishf = new Fraishf;

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

  supprimer(id: number): void {
    this.unFraisHF = new Fraishf();
    this.unFraisHF.id_fraishorsforfait=id;
    this.unSHF.deleteFraisHF(this.unFraisHF).subscribe(
      () => {
      },
      (error) => {
        this.error = error.messages;
      }
    );
    this.unRouteur.navigate(['/accueil']);
  }

  validerMontantFraisHorsForfait(): void {

    this.unSHF.validateMontant(this.mesFraisHT[0].id_frais, this.montantTotal).subscribe(
      () => {
        alert("Mise à jour   réussie!");
        this.unRouteur.navigate(['/accueil']);
      },
      (error) => {
        this.error = error.messages;
        alert(error.messages);
      }
    );
  }

  ajouterFraisHorsForfait():void{
    this.unRouteur.navigate(['AjouterFraisHT/'+this.idFrais])
  }

}
