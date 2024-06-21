import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/components/initial/app.config';
import { AppComponent } from './app/components/initial/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
