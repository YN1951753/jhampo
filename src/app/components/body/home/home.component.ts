import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  constructor(@Inject(PLATFORM_ID) private platformId: Object){
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ["github.com/", "youtube.com/"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true,
        backDelay : 2000
      };
      new Typed('#typed-text', options);
    }
  }

}
