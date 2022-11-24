import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
//import { ConnexionComponent } from './connexion/connexion.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

//import { AuthGuard } from 'auth.guard';
import { AppRoutingModule } from '../app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//import { VisiteurService } from 'service/visiteur.service';
import { ListefichefraisComponent } from '../listefichefrais/listefichefrais.component';
import { FichefraisService } from "../service/fichefrais.service";
import { FichefraisComponent } from "../fichefrais/fichefrais.component";
import { ConnexionComponent } from './connexion/connexion.component';
//import { AjoutfichefraisComponent } from '../ajoutfichefrais/ajoutfichefrais.component';
//import { EtatService } from 'service/etat.service';


@NgModule({
  declarations: [
    AppComponent,
    //ConnexionComponent,
    NavbarComponent,
    ListefichefraisComponent,
    FichefraisComponent,
    ConnexionComponent
    //FichefraisComponent,
    //AjoutfichefraisComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
