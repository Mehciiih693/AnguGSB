import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from 'rxjs';
import {Fichefrais} from "../metier/fichefrais";
import {environment} from "../environments/environment";

const ENDPOINT = environment.ENDPOINT;

@Injectable({
  providedIn: 'root'
})

export class FichefraisService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string  = "";

  private unFrais: Fichefrais = new Fichefrais();

  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control' : 'no-cache'
    });
  }

  getFicheFraisListe(id: number): Observable<any> {
    this.ClientUrl = environment.ENDPOINT + 'api/frais/listeFrais/'+id;
    return this.httpClient.get(this.ClientUrl);
  }

  getFicheFrais(id: number): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/frais/getUnFrais/' + id;
    return this.httpClient.get(this.ClientUrl);
  }

  private handleError (error: Response | any) {
    let errMsg : string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(error.message || error);
  }

  updateFrais(unFrais: Fichefrais): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/frais/updateFicheFrais';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unFrais));
  }
}
