import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConnexionComponent } from 'connexion/connexion.component';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { VisiteurService } from 'service/visiteur.service';
import { FichefraisService } from "./service/fichefrais.service";
import { AjoutfichefraisComponent } from 'ajoutfichefrais/ajoutfichefrais.component';
import {EtatService} from 'service/etat.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListefichefraisComponent } from './listefichefrais/listefichefrais.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NavbarComponent,
    ListefichefraisComponent
    FichefraisComponent,
    AjoutfichefraisComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    VisiteurService,
    FichefraisService,
    EtatService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
