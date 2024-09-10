import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteEventPageRoutingModule } from './delete-event-routing.module';

import { DeleteEventPage } from './delete-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteEventPageRoutingModule
  ],
  declarations: [DeleteEventPage]
})
export class DeleteEventPageModule {}
