import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxTarefaPageRoutingModule } from './checkbox-tarefa-routing.module';

import { CheckboxTarefaPage } from './checkbox-tarefa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxTarefaPageRoutingModule
  ],
  declarations: [CheckboxTarefaPage]
})
export class CheckboxTarefaPageModule {}
