import { Routes } from '@angular/router';



export const routes: Routes = [
    {path: 'home', loadComponent:()=>import('../body/home/home.component').then(c => c.HomeComponent)},
    {path: 'tutoriales',  loadChildren: ()=> import('../tutoriales/tutoriales.router')},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    
];
