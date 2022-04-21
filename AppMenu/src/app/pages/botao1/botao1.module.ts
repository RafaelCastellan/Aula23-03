import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Botao1PageRoutingModule } from './botao1-routing.module';

import { Botao1Page } from './botao1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Botao1PageRoutingModule
  ],
  declarations: [Botao1Page]
})
export class Botao1PageModule {}
