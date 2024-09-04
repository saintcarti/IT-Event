import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(private router:Router,private loadingcontroller:LoadingController) { }

  async registrar(){

    const loading = await this.loadingcontroller.create({
      message: 'Registrando...',
      duration: 2000,
      mode: 'ios'

    });
    await loading.present();

    loading.onDidDismiss().then(() => {
      this.router.navigate(['/login']);
    });

  }

}
