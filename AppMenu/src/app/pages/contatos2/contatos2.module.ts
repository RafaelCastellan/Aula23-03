import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contatos2PageRoutingModule } from './contatos2-routing.module';

import { Contatos2Page } from './contatos2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contatos2PageRoutingModule
  ],
  declarations: [Contatos2Page]
})
export class Contatos2PageModule {}
