import { Component, Input, OnInit } from '@angular/core';
import { SectionTutorialCode } from '../../../models/tutoriales/section-tutorial-code';
import { CodigoDesign1Component } from '../../codigo/codigo-design-1/codigo-design-1.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-section-tutorial-code',
  standalone: true,
  imports: [CodigoDesign1Component],
  templateUrl: './section-tutorial-code.component.html',
  styleUrl: './section-tutorial-code.component.css'
})
export class SectionTutorialCodeComponent implements OnInit {
  @Input() content?:SectionTutorialCode;
  code:string = "";
  language:string = "";
  ngOnInit(): void {
    if (this.content?.code) {
      this.code = this.cleanCodeSnippet(this.content.code);
    }
    if(this.content?.language){
      this.language = this.content.language;
    }
  }
  constructor(private sanitizer: DomSanitizer){
   
  }
  cleanCodeSnippet(code: string): string {
    let lines = code.split('\n');

    lines.splice(0, 1); 
    lines.pop();

    return lines.join('\n');
  }


}
