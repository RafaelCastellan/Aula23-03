import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaBadgePageRoutingModule } from './pagina-badge-routing.module';

import { PaginaBadgePage } from './pagina-badge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaBadgePageRoutingModule
  ],
  declarations: [PaginaBadgePage]
})
export class PaginaBadgePageModule {}
