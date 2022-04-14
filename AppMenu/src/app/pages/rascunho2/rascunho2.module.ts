import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Rascunho2PageRoutingModule } from './rascunho2-routing.module';

import { Rascunho2Page } from './rascunho2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Rascunho2PageRoutingModule
  ],
  declarations: [Rascunho2Page]
})
export class Rascunho2PageModule {}
