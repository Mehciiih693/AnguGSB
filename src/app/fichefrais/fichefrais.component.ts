import { Component, OnInit } from '@angular/core';
import {Fichefrais} from '../metier/fichefrais';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import {FichefraisService} from "../service/fichefrais.service";

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

  constructor(private unFS: FichefraisService,
              private activatedRoute: ActivatedRoute,
              private unRouteur: Router) {
  }

  ngOnInit(): void {

    //this.fraisid = +this.activatedRoute.snapshot.paramMap.get('id');
    //this.getFichefrais(this.fraisid);
  }

}
