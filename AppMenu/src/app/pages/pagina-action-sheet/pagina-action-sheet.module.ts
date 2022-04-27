import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaActionSheetPageRoutingModule } from './pagina-action-sheet-routing.module';

import { PaginaActionSheetPage } from './pagina-action-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaActionSheetPageRoutingModule
  ],
  declarations: [PaginaActionSheetPage]
})
export class PaginaActionSheetPageModule {}
