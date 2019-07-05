import { AboutPage } from './../about/about';
import { todo } from './../model/todo';
import { ChatPage } from './../chat/chat';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  info :  Array<todo> = [
    {id : 1 , icon : "../../assets/icon/icons8-pixel-cat-50.png", description : "Go out with your dog", fav: 15},
    {id : 2 , icon : "../../assets/icon/icons8-volunteering-64 (1).png", description : "Wash the dishes", fav: 25},
    {id : 3 , icon : "../../assets/icon/icons8-remove-64.png", description : "Take the trash out", fav: 10},
    {id : 4 , icon : "../../assets/icon/icons8-search-filled-50.png", description : "Look for something to do", fav: 40},
  ];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}
    showConfirm() {
      const confirm = this.alertCtrl.create({
        title: 'Add task',
        message: 'Do you want to proceed?',
        buttons: [
          {
            text: 'Disagree',
            handler: () => {

              //console.log('Disagree clicked');
              this.navCtrl.push(HomePage);
            }
          },
          {
            text: 'Agree',
            handler: () => {
              this.navCtrl.push(ChatPage);
              console.log(this.info.length);
            }
          }
        ]
      });
      confirm.present();
    }
    profile(){
      this.navCtrl.push(AboutPage);
    }


}
