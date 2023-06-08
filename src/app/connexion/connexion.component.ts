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
  public lblLogin : string = '';
  public lblMessage! : string;
  public estCache : boolean = true;
  public unVisiteur! : visiteur;
  private error : string='';

  constructor(private unVS: VisiteurService, private router: Router) { }

  ngOnInit(): void {
  }

  valider(): void {
    this.unVisiteur = new visiteur();
    this.unVisiteur.login_visiteur=this.userLogin;
    this.unVisiteur.pwd_visiteur=this.userMdp;

    this.unVS.Login(this.unVisiteur).subscribe(
      (visiteur) => {
        this.unVisiteur = visiteur;
        if (this.unVisiteur.id_visiteur != null) {
          alert("Authentification réussie !!!");
          localStorage.setItem('id', (this.unVisiteur.id_visiteur).toString());
          this.router.navigate(['accueil']);
        } else {
          alert("Erreur de login ou mot de passe!");
        }
      },
      (error) => {
        alert ("Erreur d'appel au serveur!");
      }
    );
  }

  deconnexion() {
    // Effacer les variables de session locales
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    // Rediriger l'utilisateur vers la page de connexion
    window.location.replace('api/signOut');
  }
}
