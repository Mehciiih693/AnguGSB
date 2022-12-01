import { Injectable } from '@angular/core';
import {visiteur} from "../metier/visiteur";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";

const ENDPOINT = environment.ENDPOINT;

@Injectable({
  providedIn: 'root'
})
export class VisiteurService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string  = "";

  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Cache-Control' : 'no-cache'
    });
  }

  getLogin(unV: visiteur): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/getConnexion';
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unV));
  }
}
