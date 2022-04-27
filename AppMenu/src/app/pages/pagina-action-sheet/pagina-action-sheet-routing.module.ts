import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaActionSheetPage } from './pagina-action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaActionSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaActionSheetPageRoutingModule {}
