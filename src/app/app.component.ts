import { Component, ViewChild, } from '@angular/core';
import { Platform, Nav, Loading, PopoverController,} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { StatusPage } from '../pages/status/status';
import { PrivacyPage } from '../pages/privacy/privacy';
import { AboutPage } from '../pages/about/about';
import { TermsPage } from '../pages/terms/terms';
import { HelpPage } from '../pages/help/help';
import firebase from 'firebase';
import { AuthProvider } from '../providers/auth/auth';
import { SocialSharing } from '@ionic-native/social-sharing';










@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
 rootPage:any = LoginPage;
 @ViewChild(Nav) nav:Nav;
 
 public text = 'Hey! I have been using Orienting to help me achieve my goals. Check it out!';
 public image =("/assets/imgs/orientating.png");
 public url=null;
 

  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen, public authservice: AuthProvider, 
    private socialSharing: SocialSharing,public popoverCtrl: PopoverController) {

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function() {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });
    
    platform.ready().then(() => {
  
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }


 
                                                                                                                                                                                                                                  
  async shareTwitter() {
    // Either URL or Image
    this.socialSharing.shareViaTwitter(this.text, null, this.image).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }
 
  async shareWhatsApp() {
    // Text + Image or URL works
    this.socialSharing.shareViaWhatsApp(this.text, null, this.image).then(() => {
      // Success
    }).catch((e) => {
      // Error!
    });
  }
 
  
  async shareEmail() {
 
    this.socialSharing.shareViaEmail(this.text, null, null).then(() => {
      //success
    }).catch((e) => {
      // Error!
    });
  }
 
 
 async shareFacebook(){
    // Image or URL works
    this.socialSharing.shareViaFacebook(this.text, this.image).then(() => {
//success
    }).catch((e) => {
      // Error!
    });
  }

  navToStatus(): void {
    this.nav.push(StatusPage);
   
 }
  Password(): void {
    this.nav.push('PasswordresetPage');
 }

 navToPrivacy(): void {
  this.nav.push(PrivacyPage);
}

navToAbout(): void {
  this.nav.push(AboutPage);
}

navToTerms(): void {
  this.nav.push(TermsPage);
}

navToHelp(): void {
  this.nav.push(HelpPage);
}


newacc(){
    
  this.nav.push('SignupPage')

}

  
}

