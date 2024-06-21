import { NgClass } from '@angular/common';
import { Component, ElementRef, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass,RouterModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isToggled: boolean = false;
  @ViewChild('list') miElemento: ElementRef | undefined;

  @ViewChild('home') homeLink!: ElementRef;
  @ViewChild('content') contentLink!: ElementRef;
  @ViewChild('game') gameLink!: ElementRef;
  @ViewChild('article') articleLink!: ElementRef;

  constructor(private renderer: Renderer2,private router: Router  ) {

  }
  menuToggle():void{
    this.isToggled = !this.isToggled;
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.updateSelectedLink("/home");
  }

  /*Codigo para modo oscuro nunca cambiar */
  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      const theme = localStorage.getItem('theme');
      if (theme) {
        this.renderer.addClass(document.body, theme);
      }
    }
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateSelectedLink(event.url);
      }
  });
  }
  updateSelectedLink(url: string) {
    const linkMap:any = {
      '/home': this.homeLink,
      '/content': this.contentLink,
      '/game': this.gameLink,
      '/article': this.articleLink
    };

    Object.keys(linkMap).forEach(route => {
      const element = linkMap[route].nativeElement;
      if (url === route) {
        element.classList.add("select");
      } else {
        element.classList.remove("select");
      }
    });
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
  ngOnDestroy() {
    
  }
  onRouteClick(){
    if (this.miElemento ) {
      this.miElemento.nativeElement.classList.add('no-transition');
      setTimeout(() => {
        this.miElemento?.nativeElement.classList.remove('no-transition');
      }, 300);
      this.miElemento.nativeElement.classList.remove('list-toggle');
      this.isToggled = !this.isToggled;
    }
  }
}
