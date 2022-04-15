import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvenementsPageRoutingModule } from './evenements-routing.module';

import { EvenementsPage } from './evenements.page';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvenementsPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [EvenementsPage]
})
export class EvenementsPageModule {}
