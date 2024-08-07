import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent:()=>import('../body/content/content.component').then(c => c.ContentComponent)},
    {path: 'tu-primer-juego-en-csharp', loadComponent:()=>import('./videos-tutoriales/naves-csharp/naves-csharp.component').then(c => c.NavesCsharpComponent)},
    {path: 'tetris-en-javascript', loadComponent:()=>import('./videos-tutoriales/tetris-javascript/tetris-javascript.component').then(c => c.TetrisJavascriptComponent)}
    
];

export default routes;