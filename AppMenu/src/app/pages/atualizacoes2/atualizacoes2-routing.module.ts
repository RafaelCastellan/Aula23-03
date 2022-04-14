import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Atualizacoes2Page } from './atualizacoes2.page';

const routes: Routes = [
  {
    path: '',
    component: Atualizacoes2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Atualizacoes2PageRoutingModule {}
