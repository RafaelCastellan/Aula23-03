import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAlertasPage } from './pagina-alertas.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaAlertasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaAlertasPageRoutingModule {}
