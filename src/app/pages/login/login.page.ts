import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  txtUsuario="";
  txtPassword="";
  constructor(private router: Router , private loadingcontroller:LoadingController) {}

  async inicio() {

    const loading = await this.loadingcontroller.create({
      mode: 'ios',
      message: 'Espere por favor... ',
      duration: 1500,
    }); 
      this.router.navigate(['/home']);

      await loading.present();
  }
}
