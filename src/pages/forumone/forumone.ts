import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { isPresent } from 'ionic-angular/util/util';
import { LearnDetailsPage } from '../learn-details/learn-details';
import { LearnService } from '../../services/learn.service';
import { CategoryModel } from '../../services/learn.model';
import { VideoPage } from '../video/video';
import { ChatsPage } from '../chats/chats';
/**
 * Generated class for the ForumonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forumone',
  templateUrl: 'forumone.html',
})
export class ForumonePage {
 
  _query : string = 'all';
  categories : Array<CategoryModel> = new Array<CategoryModel>();
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public learnService: LearnService
  ) {
    let query_param = navParams.get('query');
    this._query = isPresent(query_param) ? query_param : 'all';
  }

  ionViewWillEnter() {
    this.learnService.getFeedCategories()
    .subscribe(data => {
      this.categories = data.categories
    });
  }

  openDetails(params) {
    this.navCtrl.push(LearnDetailsPage, params);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  chats(){
    this.navCtrl.push(ChatsPage)
  }

  show(){
    this.navCtrl.push(VideoPage)
  }
  
}
