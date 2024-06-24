import { Routes } from '@angular/router';
import { NavesCsharpComponent } from './naves-csharp/naves-csharp.component';


export const routes: Routes = [
    {path: '', loadComponent:()=>import('../body/content/content.component').then(c => c.ContentComponent)},
    {path: 'tu-primer-juego-en-csharp', loadComponent:()=>import('./naves-csharp/naves-csharp.component').then(c => c.NavesCsharpComponent)}
    
];

export default routes;