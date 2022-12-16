import { Component, OnInit } from '@angular/core';
import {Fichefrais} from "../metier/fichefrais";
import {EtatService} from "../service/etat.service";
import {FichefraisService} from "../service/fichefrais.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NavbarComponent} from "../navbar/navbar.component";
import {Etat} from "../metier/etat";

@Component({
  selector: 'app-ajout-fiche-frais',
  templateUrl: 'ajoutfichefrais.component.html',
  styleUrls: ['ajoutfichefrais.component.css']
})
export class AjoutFicheFraisComponent implements OnInit {

  public unFrais : Fichefrais = new Fichefrais();
  public titre: string = "Ajout d'un frais";
  public valeur !: string;
  public error: string = '';
  public mesEtats !: Etat[];



  constructor(private unES: EtatService  ,private unFS: FichefraisService,
              private activatedRoute: ActivatedRoute, private unRouteur: Router) { }

  ngOnInit(): void {

    this.getEtat();

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

  valider(): void {

    let valeur=localStorage.getItem('id');
    this.unFrais.id_visiteur=Number(valeur);
    //this.unFrais.datemodification= new Date('0000-00-00');


    this.unFS.addFrais(this.unFrais).subscribe(
      () => {
      },
      (error) => {
        this.error = error.messages;
      }
    );
    if (this.error!='')
      alert("Erreur survenue : "+this.error)
    else
      alert("Ajout réussie ! ")
    this.unRouteur.navigate(['/Listefichefrais']);


  }
  annuler():void {
    this.unRouteur.navigate(['/accueil'])
  }

}
