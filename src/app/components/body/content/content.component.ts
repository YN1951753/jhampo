import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Video,Language } from '../../../models/video';
import { DataVideosService } from '../../../services/data-videos.service';
import { Console } from 'console';
import { RouterLink, RouterModule } from '@angular/router';
import { NgStyle } from '@angular/common';
import { ContentSectionComponent } from './content-section/content-section.component';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule,RouterLink,NgStyle,ContentSectionComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
    videos:Video[] = [];
    itemsPerPage: number = 4;
    currentPage: number = 0;
    
    @ViewChild('next') next!: ElementRef;
    @ViewChild('previous') previous!: ElementRef;
    constructor(private dataVideoService:DataVideosService){

    }
    ngOnInit(): void {
      this.dataVideoService.getVideos().subscribe(data => {
        this.videos = data;
        
      });
     
    }
    ngAfterViewInit(): void {
      if(this.currentPage<=0){
        this.previous.nativeElement.style.display = "none";
      }
    }
    getVisibleVideos(): Video[] {
      const start = this.currentPage * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.videos.slice(start, end);
    }
    nextPage() {
      if (this.currentPage < Math.ceil(this.videos.length / this.itemsPerPage) - 1) {
        this.currentPage++;
      }
      this.scrollToTop();
      if (this.currentPage == Math.ceil(this.videos.length / this.itemsPerPage) - 1) {
        this.next.nativeElement.style.display = "none";
      }else{
        this.previous.nativeElement.style.display = "block";
      }
      
    }

    previousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
      }
      if(this.currentPage<=0){
        this.previous.nativeElement.style.display = "none";
      }else{
        this.next.nativeElement.style.display = "block";
      }
      this.scrollToTop();
    }
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
}
