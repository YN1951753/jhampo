import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import {  Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass,RouterModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isToggled: boolean = false;
  isScrolled = false;
  isToggleContent: boolean = false;
  isContentOpen = false;
  isRedesOpen = false;
  @ViewChild('list') miElemento: ElementRef | undefined;


  @ViewChild('content') content!: ElementRef;
  @ViewChild('contentArrow') contentArrow!: ElementRef;

  @ViewChild('redes') redes!: ElementRef;
  @ViewChild('redesArrow') redesArrow!: ElementRef;


  constructor(private renderer: Renderer2,private router: Router  ) {

  }
  menuToggle():void{
    this.isToggled = !this.isToggled;
  }


  /*Codigo para modo oscuro nunca cambiar */
  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const theme = localStorage.getItem('theme');
      if (theme) {
        this.renderer.addClass(document.body, theme);
      }
    };
  }

  toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
      this.renderer.removeClass(document.body, 'dark-theme');
      localStorage.removeItem('theme');
    } else {
      this.renderer.addClass(document.body, 'dark-theme');
      localStorage.setItem('theme', 'dark-theme');
    }
  } 
  /*Transition */
  onRouteClick(){
    if (this.miElemento) {
      this.miElemento.nativeElement.classList.add('no-transition');
      setTimeout(() => {
        this.miElemento?.nativeElement.classList.remove('no-transition');
      }, 300);
      this.miElemento.nativeElement.classList.remove('list-toggle');
      this.isToggled = !this.isToggled;
    }
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    console.log(""+targetElement);
    // Check if the click happened inside the menu or on the menu button
    if (this.content.nativeElement.contains(targetElement)) {
      return;
    }
    
    if (this.isContentOpen) {
      this.isContentOpen = false;
      this.content.nativeElement.classList.remove("item-toggle");
      this.contentArrow.nativeElement.classList.remove("arrow-toggle");
      console.log("Closed");
    }
    if (this.isRedesOpen) {
      this.isRedesOpen = false;
      this.redes.nativeElement.classList.remove("item-toggle");
      this.redesArrow.nativeElement.classList.remove("arrow-toggle");
      console.log("Closed");
    }
  }
  openOptionsContent(event: MouseEvent){
    event.stopPropagation();
    this.isContentOpen = !this.isContentOpen;

    //Cerra otros menus
    this.isRedesOpen = false;
    this.redes.nativeElement.classList.remove("item-toggle");
    this.redesArrow.nativeElement.classList.remove("arrow-toggle");
     
  }
  openOptionsRedes(event: MouseEvent){
    event.stopPropagation();
    this.isRedesOpen = !this.isRedesOpen;
    //Cerrar otros menu
    this.isContentOpen = false;
    this.content.nativeElement.classList.remove("item-toggle");
    this.contentArrow.nativeElement.classList.remove("arrow-toggle");
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = offset > 0;
  }
  
}
