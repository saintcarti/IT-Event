import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage  {

  constructor(private alertcontroller:AlertController, private router:Router) { }

  async recuperarContrasena(){
    const alert = await this.alertcontroller.create({
      header: 'Te enviamos un mensaje a tu correo',
      message: 'Porfavor sigue las instrucciones para recuperar tu contraseña',
      buttons: [
        {
          text: 'Entendido',
          handler: () => {
            this.router.navigate(['/login']);
          }
        }
      ]
    });
    await alert.present();
  }
}
