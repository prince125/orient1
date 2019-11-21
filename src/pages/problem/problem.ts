import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProblemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-problem',
  templateUrl: 'problem.html',
})
export class ProblemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {
      title :'The surprising secret that solves your problems quickly',
      video : 'https://www.youtube-nocookie.com/embed/tEPEHpgK09Q?rel=0'

    },
    
    {

      title :'Figure It Out - The Art of Problem Solving',
      video : 'https://www.youtube-nocookie.com/embed/6_LX9mo0Thw?rel=0'

    },
    {

      title :'Working backward to solve problems - Maurice Ashley ',
      video : 'https://www.youtube-nocookie.com/embed/v34NqCbAA1c?rel=0'

    },
    {

      title :'A Young Scientists Guide to Problem Solving and Innovation',
      video : 'https://www.youtube-nocookie.com/embed/GBEPYDLD3vg?rel=0'
      
    }
  ]

}
