import { Component } from '@angular/core';

interface Opciones{
  icon: string;
  name: string;
  redirectTo: string;
}



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  opciones : Opciones[]=[
    {
      icon: 'person-circle-outline',
      name: 'Perfil',
      redirectTo: '/profile'
    },
    {
      icon: 'people-outline',
      name: 'Usuarios',
      redirectTo: '/users'
    },
    {
      icon: 'log-out-outline',
      name: 'Cerrar Sesión',
      redirectTo: '/login'
    }
  ]

}
