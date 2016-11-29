import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../ngfactory/src/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);