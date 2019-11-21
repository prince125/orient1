import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service',
  templateUrl: 'service.html',
})
export class ServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  videos: any[]=[
    {
      title :'Help Yourself by Helping Others',
      video : 'https://www.youtube-nocookie.com/embed/PqtNaWXOFPM?rel=0'

    },
    
    {

      title :'Reciprocal Service: The Gift of Serving Others',
      video : 'https://www.youtube-nocookie.com/embed/oIFBJkNm5bw?rel=0'

    },
    {

      title :'Service is connecting your passion to someone else’s need',
      video : 'https://www.youtube-nocookie.com/embed/5iMQirTyGBw?rel=0'

    },
    {

      title :'Finding Your Strength by Helping Others ',
      video : 'https://www.youtube-nocookie.com/embed/zu1VtUuxBW4?rel=0'
      
    }
  ]


}
