import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisciplinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-discipline',
  templateUrl: 'discipline.html',
})
export class DisciplinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  videos: any[]=[
    {

      title :'How to Become More Disciplined (animated short story)',
      video : 'https://www.youtube.com/embed/cPn3UOt1lxw?rel=0'

    },
    
    {

      title :'TERRY CREWS - 5 KEYS TO SELF DISCIPLINE',
      video : 'https://www.youtube.com/embed/kpNbUN2_ebo?rel=0'

    },
    {

      title :'POWER OF DISCIPLINE (ft. Akshay Kumar)',
      video : 'https://www.youtube.com/embed/KSf3vde-odQ?rel=0'

    },

    {

      title :'SELF DISCIPLINE (Featuring Will Smith)',
      video : 'https://www.youtube.com/embed/ft_DXwgUXB0?rel=0'

    }
  ]

}
