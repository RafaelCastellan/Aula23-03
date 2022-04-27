import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAlertasPageRoutingModule } from './pagina-alertas-routing.module';

import { PaginaAlertasPage } from './pagina-alertas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAlertasPageRoutingModule
  ],
  declarations: [PaginaAlertasPage]
})
export class PaginaAlertasPageModule {}
