import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  videos: any[]=[
    {
      title :'Social Well Being ',
      video : 'https://www.youtube-nocookie.com/embed/RijQpsWEdrE?rel=0'

    },
    
    {

      title :'John Robbins on the Importance of Social Connections',
      video : 'https://www.youtube-nocookie.com/embed/tcRSmRlbHvw?rel=0'

    },
    {

      title :'A Social Life | Award Winning Short Film ',
      video : 'https://www.youtube-nocookie.com/embed/GXdVPLj_pIk?rel=0'

    }
  ]


}
