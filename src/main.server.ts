import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/components/initial/app.component';
import { config } from './app/components/initial/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
