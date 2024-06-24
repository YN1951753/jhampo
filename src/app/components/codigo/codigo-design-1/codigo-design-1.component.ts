import { AfterViewInit, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, } from '@angular/core';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/prism.js';
import { isPlatformBrowser } from '@angular/common';
import {Clipboard} from '@angular/cdk/clipboard';

declare var Prism: any;

@Component({
  selector: 'app-codigo-design-1',
  standalone: true,
  imports:[],
  templateUrl: './codigo-design-1.component.html',
  styleUrls: ['./codigo-design-1.component.css']
})
export class CodigoDesign1Component implements AfterViewInit {
  @ViewChild('copy') copy!: ElementRef;
  @ViewChild('check') check!: ElementRef;
  @Input() codeSnippet:string="";
  @Input() language:string = "";

  copyText(){
    this.clipboard.copy(this.codeSnippet);
    this.copy.nativeElement.style.display = "none";
   this.check.nativeElement.style.display = "block";
    setTimeout(() => {
   this.check.nativeElement.style.display = "none";
    this.copy.nativeElement.style.display = "block";
    }, 1000);
  }
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private clipboard: Clipboard) {
   

  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {

      Prism.highlightAll();
    }
  }

}
