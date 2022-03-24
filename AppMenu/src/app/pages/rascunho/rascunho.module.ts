import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RascunhoPageRoutingModule } from './rascunho-routing.module';

import { RascunhoPage } from './rascunho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RascunhoPageRoutingModule
  ],
  declarations: [RascunhoPage]
})
export class RascunhoPageModule {}
