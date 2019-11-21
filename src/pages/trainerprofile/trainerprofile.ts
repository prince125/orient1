import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import firebase from 'firebase';
import { LoginPage } from '../login/login';
/**
 * Generated class for the TrainerprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trainerprofile',
  templateUrl: 'trainerprofile.html',
})
export class TrainerprofilePage {
  avatar: string;
  displayName: string;
  des: string;
  spl: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: UserProvider, public zone: NgZone, public alertCtrl: AlertController,
    public imghandler: ImghandlerProvider) {
  }

  ionViewWillEnter() {
    this.loaduserdetails();
  }

  loaduserdetails() {
    this.userservice.gettrainerdetails().then((res: any) => {
      this.displayName = res.displayName;
    this.des = res.des;
    this.spl = res.spl;

      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })
  }

  editimage() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    this.imghandler.uploadimage().then((url: any) => {
      this.userservice.updateimage(url).then((res: any) => {
        if (res.success) {
          statusalert.setTitle('Updated');
          statusalert.setSubTitle('Your profile pic has been changed successfully!!');
          statusalert.present();
          this.zone.run(() => {
          this.avatar = url;
        })  
        }  
      }).catch((err) => {
          statusalert.setTitle('Failed');
          statusalert.setSubTitle('Your profile pic was not changed');
          statusalert.present();
      })
      })
  }

  editname() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit Username',
      inputs: [{
        name: 'username',
        placeholder: 'Username'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {

        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.username) {
            this.userservice.updatedispname(data.username).then((res: any) => {
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your username has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.displayName = data.username;
                })
              }

              else {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your username was not changed');
                statusalert.present();
              }
                             
            })
          }
        }
        
      }]
    });
    alert.present();
  }

  editdes() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit Designation',
      inputs: [{
        name: 'designation',
        placeholder: 'Designation'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {

        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.designation) {
            this.userservice.updatdes(data.designation).then((res: any) => {
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your designation has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.des = data.designation;
                })
              }

              else {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your designation was not changed');
                statusalert.present();
              }
                             
            })
          }
        }
        
      }]
    });
    alert.present();
  }

  editskills() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit Skills',
      inputs: [{
        name: 'skill',
        placeholder: 'Skills'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {

        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.skill) {
            this.userservice.updatskills(data.skill).then((res: any) => {
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your skills has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.spl = data.skill;
                })
              }

              else {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your skills were not changed');
                statusalert.present();
              }
                             
            })
          }
        }
        
      }]
    });
    alert.present();
  }


  logout() {
    this.userservice.afireauth.auth.signOut().then(() => {
   this.navCtrl.setRoot(LoginPage);
   }
   );

}
}