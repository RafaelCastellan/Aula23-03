import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardTarefaPage } from './card-tarefa.page';

const routes: Routes = [
  {
    path: '',
    component: CardTarefaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardTarefaPageRoutingModule {}
