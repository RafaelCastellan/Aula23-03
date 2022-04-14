import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contatos2Page } from './contatos2.page';

const routes: Routes = [
  {
    path: '',
    component: Contatos2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contatos2PageRoutingModule {}
