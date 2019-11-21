import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResiliencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resilience',
  templateUrl: 'resilience.html',
})
export class ResiliencePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {
      title :'The Secret of Becoming Mentally Strong',
      video : 'https://www.youtube-nocookie.com/embed/TFbv757kup4'

    },
    
    {

      title :'What Trauma Taught Me About Resilience',
      video : 'https://www.youtube-nocookie.com/embed/3qELiw_1Ddg?rel=0'

    },
    {

      title :'The Power of Resilience',
      video : 'https://www.youtube-nocookie.com/embed/isfw8JJ-eWM?rel=0'

    },
    {

      title :'Educating For Happiness and Resilience',
      video : 'https://www.youtube-nocookie.com/embed/DbC18wFkHNI?rel=0'
      
    },
    {

      title :'Cultivating resilience',
      video : 'https://www.youtube-nocookie.com/embed/eLzVJVM1BUc?rel=0'
      
    }
  ]

}
