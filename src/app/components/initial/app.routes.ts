import { Routes } from '@angular/router';
import { NavesCsharpComponent } from '../tutoriales/naves-csharp/naves-csharp.component';


export const routes: Routes = [
    {path: 'home', loadComponent:()=>import('../body/home/home.component').then(c => c.HomeComponent)},
    {path: 'content',  loadComponent:()=>import('../body/content/content.component').then(c => c.ContentComponent),
        children:[
        {path: 'naves-csharp',  loadComponent:()=>import('../tutoriales/naves-csharp/naves-csharp.component').then(c => c.NavesCsharpComponent)},
        
        ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    
];
