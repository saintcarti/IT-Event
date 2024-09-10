import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventsPage } from './events.page';

const routes: Routes = [
  {
    path: '',
    component: EventsPage
  },  {
    path: 'event-selected',
    loadChildren: () => import('./event-selected/event-selected.module').then( m => m.EventSelectedPageModule)
  },
  {
    path: 'detail-event',
    loadChildren: () => import('./detail-event/detail-event.module').then( m => m.DetailEventPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventsPageRoutingModule {}
