import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface AppEvent {
  id: number;
  name: string;
  date: string;
  location: string;
  imagen: string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  events: AppEvent[] = [];
  selectedEvent: AppEvent | null = null;
  newEvent: AppEvent = { id: 0, name: '', date: '', location: '', imagen: '' };

  constructor(private menucontroller: MenuController , private router:Router ,private alertcontroller:AlertController) {}

  ngOnInit() {
    this.loadEvents();
  }

  mostrarMenu() {
    this.menucontroller.open('first');
  }

  loadEvents() {
    // Simulate loading events
    this.events = [
      { id: 1, name: 'Evento 1', date: '2023-10-01', location: 'Lugar 1', imagen: 'https://www.eldiario.es/andalucia/andalucia/imagenes-imprescindibles-Andalucia_EDIIMA20191206_0001_19.jpg' },
      { id: 2, name: 'Evento 2', date: '2023-10-02', location: 'Lugar 2', imagen: 'https://www.eldiario.es/andalucia/andalucia/imagenes-imprescindibles-Andalucia_EDIIMA20191206_0001_19.jpg' }
    ];
  }

  selectEvent(event: AppEvent) {
    this.selectedEvent = { ...event };
  }

  updateEvent() {
    this.router.navigate(['/modify-event']);
  }

  async deleteEvent() {
    const alert = await this.alertcontroller.create({
      header: 'Eliminar evento',
      message: `¿Estás seguro de que quieres eliminar el evento ?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.router.navigate(['/tabs/tab3']);
          }
        }
      ]
    });

    await alert.present();
  }

  async createEvent(){
    const alert = await this.alertcontroller.create({
      header: 'Crear evento',
      message: `¿Estás seguro de que quieres crear el evento ?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Crear',
          handler: () => {
            this.router.navigate(['/tabs/tab3']);
          }
        }
      ]
    });

    await alert.present();

  }
  

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          this.selectedEvent!.imagen = e.target.result as string;
        }
      };

      reader.readAsDataURL(file);
    }
  }

  onNewImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          this.newEvent.imagen = e.target.result as string;
        }
      };

      reader.readAsDataURL(file);
    }
  }
}
