import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}

  async addTask() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add a new task',
      message: 'Add a task',
      buttons: ['Add'],
      inputs: [''] 
    });

    await alert.present();
  }
}
