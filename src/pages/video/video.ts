import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BalancePage } from '../balance/balance';
import { BeliefPage } from '../belief/belief';
import { CommunicationPage } from '../communication/communication';
import { ConcentrationPage } from '../concentration/concentration';
import { FocusPage } from '../focus/focus';
import { EtiquettePage } from '../etiquette/etiquette';
import { EntrepreneurPage } from '../entrepreneur/entrepreneur';
import { DisciplinePage } from '../discipline/discipline';
import { CreativityPage } from '../creativity/creativity';
import { ConfidencePage } from '../confidence/confidence';
import { TimePage } from '../time/time';
import { TeamworkPage } from '../teamwork/teamwork';
import { StressPage } from '../stress/stress';
import { SocialPage } from '../social/social';
import { ServicePage } from '../service/service';
import { SacrificePage } from '../sacrifice/sacrifice';
import { ResiliencePage } from '../resilience/resilience';
import { ProblemPage } from '../problem/problem';
import { PracticePage } from '../practice/practice';
import { PerseverancePage } from '../perseverance/perseverance';
import { PatiencePage } from '../patience/patience';
import { MotivationPage } from '../motivation/motivation';
import { MeditationPage } from '../meditation/meditation';
import { LearningPage } from '../learning/learning';
import { LeadershipPage } from '../leadership/leadership';

/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  constructor(public navCtrl: NavController) {

  }

  balance(){

    this.navCtrl.push(BalancePage);
  }
  belief(){

    this.navCtrl.push(BeliefPage);

  }
  communication(){

    this.navCtrl.push(CommunicationPage);

  }
  concentration(){

    this.navCtrl.push(ConcentrationPage);

  }
  confidence(){

    this.navCtrl.push(ConfidencePage);

  }
  creativity(){

    this.navCtrl.push(CreativityPage);

  }
  discipline(){

    this.navCtrl.push(DisciplinePage);

  }
  entrepreneur(){

    this.navCtrl.push(EntrepreneurPage);

  }
  etiquette(){

    this.navCtrl.push(EtiquettePage);

  }
  focus(){

    this.navCtrl.push(FocusPage);

  }
  leadership(){

    this.navCtrl.push(LeadershipPage);

  }
  learning(){

    this.navCtrl.push(LearningPage);

  }
  meditation(){

    this.navCtrl.push(MeditationPage);

  }
  motivation(){
    
    this.navCtrl.push(MotivationPage);

  }
  patience(){

    this.navCtrl.push(PatiencePage);

  }
  perseverance(){

    this.navCtrl.push(PerseverancePage);

  }
  practice(){

    this.navCtrl.push(PracticePage);

  }
  problem(){

    this.navCtrl.push(ProblemPage);

  }
  resilience(){

    this.navCtrl.push(ResiliencePage);

  }
  sacrifice(){

    this.navCtrl.push(SacrificePage);

  }
  service(){

    this.navCtrl.push(ServicePage);

  }
  social(){

    this.navCtrl.push(SocialPage);

  }
  stress(){

    this.navCtrl.push(StressPage);

  }
  teamwork(){

    this.navCtrl.push(TeamworkPage);

  }
  time(){

    this.navCtrl.push(TimePage);

  }

}
