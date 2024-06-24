import { Component, Input } from '@angular/core';
import { AnuncioVerticalComponent } from '../anuncio-vertical/anuncio-vertical.component';
import { SidebarTutorial } from '../../../models/tutoriales/sidebar-tutorial';

@Component({
  selector: 'app-sidebar-tutorial',
  standalone: true,
  imports: [AnuncioVerticalComponent],
  templateUrl: './sidebar-tutorial.component.html',
  styleUrl: './sidebar-tutorial.component.css'
})
export class SidebarTutorialComponent {
  @Input() items: SidebarTutorial[] = [];;
  constructor(){
    
  }
}
