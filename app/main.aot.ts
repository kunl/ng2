import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../ngc/app/example/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);