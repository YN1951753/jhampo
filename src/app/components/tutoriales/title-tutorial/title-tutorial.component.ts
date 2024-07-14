import { Component, Input } from '@angular/core';
import { HeaderTutorial } from '../../../models/tutoriales/header-tutorial';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-title-tutorial',
  standalone: true,
  imports: [],
  templateUrl: './title-tutorial.component.html',
  styleUrl: './title-tutorial.component.css'
})
export class TitleTutorialComponent {
    @Input() content?:HeaderTutorial;

    btnYoutube(){
      window.open(this.content?.srcYoutube, '_blank');
    }
}
    
