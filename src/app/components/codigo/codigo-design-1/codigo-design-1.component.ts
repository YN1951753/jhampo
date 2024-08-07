import { AfterViewInit, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewChild, inject, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {Clipboard} from '@angular/cdk/clipboard';
import { Highlight, HighlightAuto } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import 'highlight.js/styles/atom-one-dark.css';



@Component({
  selector: 'app-codigo-design-1',
  standalone: true,
  imports: [Highlight, HighlightLineNumbers,HighlightAuto,Highlight],
  templateUrl: './codigo-design-1.component.html',
  styleUrls: ['./codigo-design-1.component.css']
})
export class CodigoDesign1Component implements AfterViewInit {
  @ViewChild('copy') copy!: ElementRef;
  @ViewChild('check') check!: ElementRef;
  @Input() codeSnippet:string=``;
  @Input() language:string = "";

  copyText(){
    this.clipboard.copy(this.codeSnippet.toString());

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
     
    }
  }




}
