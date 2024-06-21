import { Injectable } from '@angular/core';
import { Video,Language } from '../models/video';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataVideosService {
  private json = "data/videos.json";
  
  constructor(private http: HttpClient) { 

  }
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.json);
  }
}
