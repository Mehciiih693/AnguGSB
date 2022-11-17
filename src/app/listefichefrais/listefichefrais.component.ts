import { Component, OnInit } from '@angular/core';
import {Fichefrais} from '../metier/fichefrais';
import {FichefraisService} from "../service/fichefrais.service";
import {Router} from '@angular/common/http';

@Component({
  selector: 'app-listefichefrais',
  templateUrl: './listefichefrais.component.html',
  styleUrls: ['./listefichefrais.component.css']
})
export class ListefichefraisComponent implements OnInit {

  public mesFrais: Fichefrais[];
  private error: string;
  private id: number;
  private titre: string;
  private unFrais: Fichefrais;

  constructor( private unFS: FichefraisService, private unRouteur: Router) {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
  }

  ngOnInit() {
    let item = LocalStorage.getItem('id');
    this.id = Number.parseInt(item);
    this.titre = 'Liste des frais du visiteur ' + this.id;
    this.getFicheFraisListe(this.id);
  }

  getFicheFraisListe(id: number) : void {
    this.unFS.getFicheFraisListe(id).subscribe(
      (fichefrais) => {
        this.mesFrais = fichefrais;
        },
      (error) => {
        this.error = error.messages;
      }
    )
  }

}
