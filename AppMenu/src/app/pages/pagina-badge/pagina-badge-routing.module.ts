import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaBadgePage } from './pagina-badge.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaBadgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaBadgePageRoutingModule {}
