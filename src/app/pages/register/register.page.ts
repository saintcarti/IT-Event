import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor(private router:Router , private loadingcontroller:LoadingController) { }

  async registro() {

    const loading = await this.loadingcontroller.create({
      mode: 'ios',
      message: 'Espere por favor...',
      duration: 1500,
    });
    this.router.navigate(['/home']);
    await loading.present();

  }

}
