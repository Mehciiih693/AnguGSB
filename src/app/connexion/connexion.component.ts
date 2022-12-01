import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {VisiteurService} from "../service/visiteur.service";
import {visiteur} from "../metier/visiteur";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  public titre : string = 'Connexion';
  public userLogin! : string;
  public userMdp! : string;
  public lblMdp : string = 'Entrez votre mot de passe :';
  public lblLogin : string = 'login :';
  public lblMessage! : string;
  public estCache : boolean = true;
  public unVisiteur! : visiteur;
  private error : string = '';

  constructor(private unVS: VisiteurService, private router: Router) { }

  ngOnInit(): void {
  }

  valider() : void {
    this.unVisiteur = new visiteur();
    this.unVisiteur.login_visiteur= this.userLogin;
    this.unVisiteur.pwd_visiteur= this.userMdp;
    this.unVisiteur.id_visiteur=0;

    this.unVS.getLogin(this.unVisiteur).subscribe(
      (visiteur) => {
        this.unVisiteur = visiteur;
        if (this.unVisiteur.id_visiteur!=0)
        {
          alert("Authentification réussie !!!");
          localStorage.setItem('id', (this.unVisiteur.id_visiteur).toString());
          this.router.navigate(['accueil']);
        }
        else {
          alert("Erreur d'appel");
        }
      },
      (error) => {
        this.error = error.messages;
      }
    );
  }

}
