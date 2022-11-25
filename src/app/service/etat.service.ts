import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etat} from "../metier/etat";
import {environment} from "../environments/environment";

const ENDPOINT = environment.ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class EtatService {

  private ClientUrl: string  = "";

  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control' : 'no-cache'
    });
  }

  getListeEtat(): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/frais/listeEtat';
    return this.httpClient.get(this.ClientUrl);
  }
}
