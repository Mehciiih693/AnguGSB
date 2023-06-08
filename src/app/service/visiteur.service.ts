import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {visiteur} from "../metier/visiteur";

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

  Login(unV: visiteur): Observable<any> {
    this.ClientUrl = ENDPOINT + 'api/login';
    console.log(this.ClientUrl)
    return this.httpClient.post(this.ClientUrl, JSON.stringify(unV));
  }
}
