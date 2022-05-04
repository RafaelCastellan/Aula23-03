import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxTarefaPage } from './checkbox-tarefa.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxTarefaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckboxTarefaPageRoutingModule {}
