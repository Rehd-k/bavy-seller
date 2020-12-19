import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../core/shared/services/products.service';
import { StoriesService } from '../core/shared/services/stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {


  stroies: FormGroup;
  disableImages = false;
  disableVideos = false;
  Files: FileList;
  imagesReview = [];
  videosReview = []
  products = [];

  related = [];

  uploadResponse = { status: '', message: '', filePath: '' };

  constructor(private formBuilder: FormBuilder, private storiesService: StoriesService, private prodService: ProductsService) { }

  getFormInfo() {
    this.stroies = this.formBuilder.group({
      related: [this.related],
      images: [null],
      video: [null],
      newsText: ['']
    });
  }



  get productFormData() {
    const controls = 'controls';
    return this.stroies[controls];
  }

  getRelatedProducts() {
    this.prodService.getProducts().subscribe(res => console.log(res))
  }

  clearVideo() {
    this.videosReview = [];
    this.disableImages = false;
  }

  clearImages() {
    this.imagesReview = [];
    this.disableVideos = false;
  }

  selectImages(event) {
    this.imagesReview = [];
    this.videosReview = [];
    if (event.target.files && event.target.files[0]) {
      this.Files = event.target.files;
      for (let i = 0; i < this.Files.length; i++) {
        this.storiesService.formData.append('images', this.Files[i])
        const reader = new FileReader();
        // tslint:disable-next-line: no-shadowed-variable
        reader.onload = (event: any) => {
          this.imagesReview.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
      this.disableVideos = true;
    }
  }

  selectVideos(event) {
    this.videosReview = [];
    this.imagesReview = [];
    if (event.target.files && event.target.files[0]) {
      this.Files = event.target.files;
      for (let i = 0; i < this.Files.length; i++) {
        this.storiesService.formData.append('Video', this.Files[i])
        const reader = new FileReader();
        // tslint:disable-next-line: no-shadowed-variable
        reader.onload = (event: any) => {
          this.videosReview.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
      this.disableImages = true;
    }
  }


  addRealatedProducts(productId) {
    this.related.push({
      productId
    });

  }


  upload() {
    this.storiesService.uploadStories(this.storiesService.toFormData(this.stroies.value)).subscribe();
  }



  ngOnInit(): void {
    this.getFormInfo();

  }



 
}
