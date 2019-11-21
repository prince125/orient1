import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Modal } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { config } from './app.firebaseconfig';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth/auth';

import { LoginPage } from "../pages/login/login";
import { UserProvider } from '../providers/user/user';
import { ImghandlerProvider } from '../providers/imghandler/imghandler';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { StatusPage } from '../pages/status/status';
import { AboutPage } from '../pages/about/about';
import { HelpPage } from '../pages/help/help';
import { PasswordPage } from '../pages/password/password';
import { PrivacyPage } from '../pages/privacy/privacy';
import { TermsPage } from '../pages/terms/terms';

import { LearnService } from '../services/learn.service';
import { AnswerService } from '../services/answer.service';
import { LearnDetailsPage } from '../pages/learn-details/learn-details';
import { QuestionDetailsPage } from '../pages/question-details/question-details';
import { ManageQuestionPage } from '../pages/manage-question/manage-question';
import { ManageAnswerPage } from '../pages/manage-answer/manage-answer';
import { QuestionService } from '../services/question.service';

import { SDKBrowserModule } from '../../sdk/index';
import { ForumPage } from '../pages/forum/forum';
import { ChatsPage } from "../pages/chats/chats";
import { HomePage } from "../pages/home/home";
import { FeedbackPage } from "../pages/feedback/feedback";
import { Feedback2Page } from '../pages/feedback2/feedback2';
import { VisionPage } from '../pages/vision/vision';
import { youtubeProvider } from '../providers/youtube/youtube';
import { VideoPage } from '../pages/video/video';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { RequestsProvider } from '../providers/requests/requests';
import { ChatProvider } from '../providers/chat/chat';
import { AngularFireDatabase } from 'angularfire2/database';
import { ChatonePage } from '../pages/chatone/chatone';
import { BalancePage } from '../pages/balance/balance';
import { BeliefPage } from '../pages/belief/belief';
import { CommunicationPage } from '../pages/communication/communication';
import { ConcentrationPage } from '../pages/concentration/concentration';
import { ConfidencePage} from '../pages/confidence/confidence';
import { CreativityPage } from '../pages/creativity/creativity';
import { DisciplinePage } from '../pages/discipline/discipline';
import { EntrepreneurPage } from '../pages/entrepreneur/entrepreneur';
import { EtiquettePage } from '../pages/etiquette/etiquette';
import { FocusPage } from '../pages/focus/focus';
import { LeadershipPage } from '../pages/leadership/leadership';
import { LearningPage } from '../pages/learning/learning';
import { MeditationPage } from '../pages/meditation/meditation';
import { MotivationPage } from '../pages/motivation/motivation';
import { PatiencePage } from '../pages/patience/patience';
import { PerseverancePage } from '../pages/perseverance/perseverance';
import { PracticePage } from '../pages/practice/practice';
import { ProblemPage } from '../pages/problem/problem';
import { ResiliencePage } from '../pages/resilience/resilience';
import { SacrificePage } from '../pages/sacrifice/sacrifice';
import { ServicePage } from '../pages/service/service';
import { StressPage } from '../pages/stress/stress';
import { SocialPage } from '../pages/social/social';
import { TeamworkPage } from '../pages/teamwork/teamwork';
import { TimePage } from '../pages/time/time';
import { YtPipe } from '../pipes/yt/yt';
import { ModalPage } from '../pages/modal/modal';
import { SocialSharing } from '@ionic-native/social-sharing';
import { PlanPage } from '../pages/plan/plan';
import { Event1Page } from '../pages/event1/event1';
import { Event2Page } from '../pages/event2/event2';
import { EventPage } from '../pages/event/event';
import { OtpProvider } from '../providers/otp/otp';
import firebase from 'firebase';
import { AdduserPage } from '../pages/adduser/adduser';
import { AdminotpPage } from '../pages/adminotp/adminotp';

firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    StatusPage,
    AboutPage,
    HelpPage,
    PasswordPage,
    PrivacyPage,
    TermsPage,
   HomePage,
    LearnDetailsPage,
    QuestionDetailsPage,
    ManageQuestionPage,
    ManageAnswerPage,
    Feedback2Page,
    FeedbackPage,
    VisionPage,
   ChatsPage,
   ChatonePage,
   BalancePage,
   BeliefPage,
   CommunicationPage,
   ConcentrationPage,
   ConfidencePage,
   CreativityPage,
   DisciplinePage,
   EntrepreneurPage,
   EtiquettePage,
   FocusPage,
   LeadershipPage,
   LearningPage,
   MeditationPage,
   MotivationPage,
   PatiencePage,
   PerseverancePage,
   PracticePage,
   ProblemPage,
   ResiliencePage,
   SacrificePage,
   ServicePage,
   SocialPage,
   StressPage,
   TeamworkPage,
   TimePage,
   YtPipe,
   VideoPage,
   ModalPage,
   PlanPage,
   Event1Page,
   Event2Page,
   EventPage,
    AdduserPage,
    AdminotpPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   AngularFireModule.initializeApp(config),
    SDKBrowserModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    StatusPage,
    AboutPage,
    HelpPage,
    PasswordPage,
    PrivacyPage,
    TermsPage,
    HomePage,
    LearnDetailsPage,
    QuestionDetailsPage,
    ManageQuestionPage,
    ManageAnswerPage,
    Feedback2Page,
   FeedbackPage,
   VisionPage,
   ChatsPage,
   ChatonePage, 
   BalancePage,
   BeliefPage,
   CommunicationPage,
   ConcentrationPage,
   ConfidencePage,
   CreativityPage,
   DisciplinePage,
   EntrepreneurPage,
   EtiquettePage,
   FocusPage,
   LeadershipPage,
   LearningPage,
   MeditationPage,
   MotivationPage,
   PatiencePage,
   PerseverancePage,
   PracticePage,
   ProblemPage,
   ResiliencePage,
   SacrificePage,
   ServicePage,
   SocialPage,
   StressPage,
   TeamworkPage,
   TimePage,
   VideoPage,
  ModalPage,
  PlanPage,
  Event1Page,
  Event2Page,
  EventPage,
  AdduserPage,
  AdminotpPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    AuthProvider,
    UserProvider,
    ImghandlerProvider,
    File,
    FileChooser,
    FilePath,
    QuestionService,
    AnswerService,
    LearnService,
    youtubeProvider,
    YoutubeVideoPlayer,
    RequestsProvider,
    ChatProvider,
    ImghandlerProvider,
   AngularFireDatabase,
   SocialSharing,
    OtpProvider,

  ]
})
export class AppModule {}
