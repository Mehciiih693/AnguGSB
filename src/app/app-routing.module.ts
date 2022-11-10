import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { RouterModule, Routes } from '@angular/router';

import { ListefichefraisComponent } from '../listefichefrais/listefichefrais.component';
import { FichefraisComponent } from '../fichefrais/fichefrais.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
