import { Component, Input } from '@angular/core';
import { Video } from '../../../../models/video';
import { RouterLink, RouterModule } from '@angular/router';
import {  NgStyle } from '@angular/common';


@Component({
  selector: 'app-content-section',
  standalone: true,
  imports: [RouterModule,RouterLink,NgStyle],
  templateUrl: './content-section.component.html',
  styleUrl: './content-section.component.css'
})
export class ContentSectionComponent {
  @Input() videos: Video[] = [];
    
  constructor(){

  }

}
