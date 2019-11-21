import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, PopoverController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController, private modal: ModalController, private social: SocialSharing,public pop: PopoverController) {
  }
  
  quote = [

    'Strive not to be a success, but rather to be of value ~ Albert Einstein',
    'The only people who never fail are those who never try ~Ilka Chase',
    'Failure is just another way to learn how to do something right ~ Marian Wright Edelman',
    'I failed my way to success ~ Thomas Edison',
    'Every failure brings with it the seed of an equivalent success ~ Napoleon Hill',
    'Only those who dare to fail greatly can ever achieve greatly ~ John F. Kennedy',
    'It is hard to fail, but it is worse never to have tried to succeed ~ Theodore Roosevelt',
    'Imagination is more important than knowledge ~ Albert Einstein',
    'Hold fast to dreams, for if dreams die, life is a broken winged bird that cannot fly \n~ Langston Hughes',
    'The future belongs to those who believe in the beauty of their dreams ~ Eleanor Roosevelt',
    'Go confidently in the direction of your dreams. Live the life you have imagined ~ Henry David Thoreau',
    'You cannot depend on your eyes when your imagination is out of focus ~ Mark Twain',
    'Commitment leads to action. Action brings your dream closer ~ Marcia Wieder',
    'Take time to deliberate; but when the time for action arrives, stop thinking and go in ~Andrew Jackson',
    'The art of leadership is saying no, not yes. It is very easy to say yes ~ Tony Blair',
    'I avoid looking forward or backward, and try to keep looking upward ~ Charlotte Bronte',
    'Every artist was first an amateur ~ Ralph Waldo Emerson',
    'We can do anything we want to do if we stick to it long enough ~ Helen Keller',
    'Insist on yourself. Never imitate ~ Ralph Waldo Emerson',
    'Our business in life is not to get ahead of others, but to get ahead of ourselves ~ E. Joseph Cossman',
    'The only journey is the one within ~ Rainer Maria Rilke',
    'The secret of success is to know something nobody else knows ~ Aristotle Onassis',
    'The art of being wise is knowing what to overlook ~ William James',
    'A goal is a dream with a deadline ~ Napoleon Hill',
    'I have not failed. I’ve just found 10,000 ways that won’t work ~ Thomas Edison',
    'Every single person I know who is successful at what they do is successful because they love doing it ~ Joe Penna',
    'Whenever an individual or a business decides that success has been attained, progress stops ~ Thomas J. Watson',
    'The road to success is always under construction ~ Arnold Palmer',
    'Sow a thought, reap an action; sow an action, reap a habit; sow a habit, reap a character; sow a character, reap a destiny ~ Chinese Proverb',
    'Don’t stand by the water and long for fish; go home and weave a net ~ Chinese Proverb',
    'A ship in harbor is safe, but that’s not what ships are for ~ John Shedd',
    'You won’t get anything unless you have the vision to imagine it ~ John Lennon',
    'You may be disappointed if you fail, but you are doomed if you don’t try ~ Beverly Sills',
    'I am not a product of my circumstances. I am a product of my decisions ~ Stephen Covey'
    ];

    randomQuoteIndex=this.quote[Math.floor(Math.random()*this.quote.length)]; 

    message:string=this.randomQuoteIndex;

  closePop(){
    this.view.dismiss();
  }

  share(){

    this.social.share(this.message+'\nOrienting App')
    .then(()=>{
      //success
  
    }).catch(() =>{
      //error
    });
  }

}
