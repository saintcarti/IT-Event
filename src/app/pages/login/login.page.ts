import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  constructor( private router:Router , private loadingcontroller:LoadingController,private menucontroller:MenuController) { }
  async inicioSesion(){
    const loading = await this.loadingcontroller.create({
      mode: 'ios',
      message: 'Iniciando Sesión...',
      duration: 2000
    });
    await loading.present();
    loading.onDidDismiss().then(() => {
      this.router.navigate(['/tabs/tab1']);
    });
    
  }

  
}
