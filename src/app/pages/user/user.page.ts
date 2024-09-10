import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage {

  constructor(private router:Router, private alertcontroller:AlertController ) { }

  async updateInfo(){
    const alert = await this.alertcontroller.create({
      header: 'Esta seguro de actualizar su informacion?',
      
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary ',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Actualizar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]


    });
    await alert.present();
  }

}
