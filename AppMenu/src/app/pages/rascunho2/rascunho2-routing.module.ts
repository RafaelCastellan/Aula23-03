import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rascunho2Page } from './rascunho2.page';

const routes: Routes = [
  {
    path: '',
    component: Rascunho2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rascunho2PageRoutingModule {}
