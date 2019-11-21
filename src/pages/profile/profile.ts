import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { UserProvider } from '../../providers/user/user';
import { LoginPage } from '../login/login';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  avatar: string;
  displayName: string;
  fname:string;
  lname:string;
  colname:string;
  cname:string;
  p1:string;
  p2:string;
  p3:string;

  name: string;
  stcol: string;
  stcou: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userservice: UserProvider, public zone: NgZone, public alertCtrl: AlertController,
    public imghandler: ImghandlerProvider) {
  }

  ionViewWillEnter() {
    this.loaduserdetails();
    this.loadpers();
  }

  loaduserdetails() {
    this.userservice.getuserdetails().then((res: any) => {
      this.displayName = res.displayName;
      this.fname=res.fname;
      this.cname=res.cname;
      this.lname=res.lname;
      this.colname=res.colname;

      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })
  }

  loadpers(){

    this.userservice.personalities().then((res: any) => {
      this.p1 = res.p1;
      this.p2=res.p2;
      this.p3=res.p3;

      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })

  }

  logout(){
    this.userservice.afireauth.auth.signOut().then(() => {
         window.location.reload(true);
        this.navCtrl.setRoot(LoginPage);
        }
        );
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

  

  editcol() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit College',
      inputs: [{
        name: 'col',
        placeholder: 'College Name'
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
          if (data.col) {
            this.userservice.updatecol(data.col).then((res: any) => {
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your designation has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.stcol = data.col;
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

  editcourse() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit Course',
      inputs: [{
        name: 'course',
        placeholder: 'Course'
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
          if (data.course) {
            this.userservice.updatecourse(data.course).then((res: any) => {
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your skills has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.stcou = data.course;
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
  }
