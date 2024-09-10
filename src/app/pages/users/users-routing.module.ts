import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './users.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage
  },  {
    path: 'user1',
    loadChildren: () => import('./user1/user1.module').then( m => m.User1PageModule)
  },
  {
    path: 'user2',
    loadChildren: () => import('./user2/user2.module').then( m => m.User2PageModule)
  },
  {
    path: 'user3',
    loadChildren: () => import('./user3/user3.module').then( m => m.User3PageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule {}
