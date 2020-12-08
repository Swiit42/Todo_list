import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, public toastController: ToastController) { }
  tasks = [];

  async taskAdded() { 
    const toast = await this.toastController.create({
      message: 'Votre tâche a été ajouté',
      duration: 1000
    });
    toast.present();
  }
  async newTask() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add a new task',
      buttons: [{
        text: 'Add',
        handler: data => {
          data.completed = 0;
          this.tasks.push(data);
          this.taskAdded();
        }
      }],
      inputs: [{
        name: 'taskName',
        type: 'text',
        placeholder: 'Ajoutez votre tâche'
      }]
    });

    await alert.present();
  }
  async deleteTask(task) {
    const alert = await this.alertController.create({
      header: 'Supprimer la tâche',
      buttons: [{
        text: 'Oui',
        handler: () => true
      },
      {
        text: 'Non',
      }]
    });
  }
}
