import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  apiBaseUrl = environment.url;
  formData = new FormData();
  constructor( private http: HttpClient) { }

  uploadStories(story: any) {
    return this.http.post(`${this.apiBaseUrl}seller/create/news`, story);
  }

  clearForm() {
    this.formData = new FormData();
  }


  toFormData<T>(formValue: T) {

    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      this.formData.append(key, value);
    }
    return this.formData;
  }
}
