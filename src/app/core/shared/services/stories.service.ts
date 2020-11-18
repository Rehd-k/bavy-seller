import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  apiBaseUrl = environment.url;
  constructor( private http: HttpClient) { }

  uploadStories(story: any) {
    return this.http.post(`${this.apiBaseUrl}seller/create/news`, story);
  }

}
