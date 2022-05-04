import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardTarefaPageRoutingModule } from './card-tarefa-routing.module';

import { CardTarefaPage } from './card-tarefa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardTarefaPageRoutingModule
  ],
  declarations: [CardTarefaPage]
})
export class CardTarefaPageModule {}
