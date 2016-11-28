import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './example/app/app.module';



export default function main(){
    return platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.error(err));
}