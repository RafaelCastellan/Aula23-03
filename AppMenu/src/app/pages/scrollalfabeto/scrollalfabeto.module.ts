import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrollalfabetoPageRoutingModule } from './scrollalfabeto-routing.module';

import { ScrollalfabetoPage } from './scrollalfabeto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollalfabetoPageRoutingModule
  ],
  declarations: [ScrollalfabetoPage]
})
export class ScrollalfabetoPageModule {}
