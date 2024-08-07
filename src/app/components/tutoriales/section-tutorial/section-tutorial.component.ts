import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SectionTutorial } from '../../../models/tutoriales/section-tutorial';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-section-tutorial',
  standalone: true,
  imports: [],
  templateUrl: './section-tutorial.component.html',
  styleUrl: './section-tutorial.component.css'
})
export class SectionTutorialComponent {
    @Input() content?:SectionTutorial;
    
   
}
