import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RascunhoPage } from './rascunho.page';

const routes: Routes = [
  {
    path: '',
    component: RascunhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RascunhoPageRoutingModule {}
