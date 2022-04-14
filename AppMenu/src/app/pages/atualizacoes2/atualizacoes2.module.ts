import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Atualizacoes2PageRoutingModule } from './atualizacoes2-routing.module';

import { Atualizacoes2Page } from './atualizacoes2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Atualizacoes2PageRoutingModule
  ],
  declarations: [Atualizacoes2Page]
})
export class Atualizacoes2PageModule {}
