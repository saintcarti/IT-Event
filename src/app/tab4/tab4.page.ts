import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

interface Asistentes {
  nombre: string;
  correo: string;
  urlname: string;
}

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {

  constructor(private menucontroller: MenuController, private router: Router) { }

  mostrarMenu() {
    this.menucontroller.open('first');
  }


  asistentes: Asistentes[] = [
    {
      nombre: 'Juan',
      correo: 'juan@gmail.com',
      urlname: 'Detalles'
    },
    {
      nombre: 'Pedro',
      correo: 'pedro@gmail.com',
      urlname: 'Detalles'
    },
    {
      nombre: 'Maria',
      correo: 'maria@gmail.com',
      urlname: 'Detalles'
    }
  ];

  navegar(){
    this.router.navigate(['/events/detail-event']);
  }


}