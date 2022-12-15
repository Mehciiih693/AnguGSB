import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Fichefrais} from "../metier/fichefrais";
import {Fraishf} from "../metier/fraishf";
import {environment} from "../environments/environment";
import {FichefraishfComponent} from "../fichefraishf/fichefraishf.component";

const ENDPOINT = environment.ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class FraishorsforfaitService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string = "";

  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders( {
      'Content-type': 'application/json',
      'Cache-Control' : 'no-cache'
    })
  }


  getFicheFraishorsforfaitListe(id: number) : Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/frais/getListeHorsForfait/'+ id;
    return this.httpClient.get(this.ClientUrl);
  }

  getFicheFraisHF(id: number): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/frais/getUnFraishorsforfait/'+id;
    return this.httpClient.get(this.ClientUrl);
  }

  addFraisHF(unFraisHF: Fraishf) : Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/addFraisHorsForfait';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unFraisHF));
  }

  updateFraisHF(unFraisHF: Fraishf): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/frais/updateFicheFraisHF';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unFraisHF));
  }

  deleteFraisHF(unFraisHF: Fraishf): Observable<any> {
    this.ClientUrl = environment.ENDPOINT+'api/frais/deleteFicheFraisHF';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unFraisHF));
  }
}
