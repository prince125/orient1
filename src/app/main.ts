import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import { LoopBackConfig } from '../../sdk';
platformBrowserDynamic().bootstrapModule(AppModule);

LoopBackConfig.setBaseURL('https://q-a-example-loopback-api.herokuapp.com');

