import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamworkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teamwork',
  templateUrl: 'teamwork.html',
})
export class TeamworkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {
      title :'Teamwork Reimagined',
      video : 'https://www.youtube-nocookie.com/embed/UwsMogSQmYI?rel=0'

    },
    
    {

      title :'Build a tower, build a team',
      video : 'https://www.youtube-nocookie.com/embed/H0_yKBitO8M?rel=0'

    },
    {

      title :'Working together to make things happen',
      video : 'https://www.youtube-nocookie.com/embed/Fd_nkBHgX8s?rel=0'

    },
    {

      title :'How to turn a group of strangers into a team',
      video : 'https://www.youtube-nocookie.com/embed/3boKz0Exros?rel=0'
      
    }
  ]

}
