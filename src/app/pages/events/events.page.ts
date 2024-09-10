import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Event {
  name: string;
  date: string;
  location: string;
  image: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage  {
  events: Event[] = [
    {
      name: 'Evento 1',
      date: '2023-10-01',
      location: 'Lugar 1',
      image: '../../../assets/img/convocatoria8.png'
    },
    {
      name: 'Evento 2',
      date: '2023-10-02',
      location: 'Lugar 2',
      image: '../../../assets/img/convocatoria6.png'
    },
    {
      name: 'Evento 3',
      date: '2023-10-03',
      location: 'Lugar 3',
      image: '../../../assets/img/convocatoria5.jpg'
    }
  ];

  constructor(private router: Router) { }


  navigateTo(url: string) {
    this.router.navigate([url]);
  }
}