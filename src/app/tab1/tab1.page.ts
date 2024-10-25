import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private toastController: ToastController) {}

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Gracias por visitar mi biografía. Siempre estoy abierto a nuevas oportunidades.Gracias por visitar mi biografía. Siempre estoy abierto a nuevas oportunidades.',
      duration: 1500,
      position: position,
    });
    

    await toast.present();

  }
  alertButtons = ['Action'];
}
