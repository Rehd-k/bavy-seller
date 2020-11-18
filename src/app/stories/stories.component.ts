import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoriesService } from '../core/shared/services/stories.service';
import { toFormData } from '../core/shared/uploadfile';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {


  stroies: FormGroup;

  products: object[];

  related = [
    {
      productName: 'house',
      productId: 'uldo'
    },
    {
      productName: 'house2',
      productId: 'uldo2'
    }
  ];

  constructor(private formBuilder: FormBuilder, private storiesService: StoriesService) { }

  getFormInfo() {
    this.stroies = this.formBuilder.group({
      related: [this.related],
      media: [null],
      newsText: ['']
    });
  }

  get productFormData() {
    const controls = 'controls';
    return this.stroies[controls];
  }

  getRelatedProducts() {


  }

  onFileChange(event: { target: { files: string | any[]; }; }) {
    if (event.target.files.length > 0) {
      const file = event.target.files;
      this.stroies.get('media').setValue(file);
      const houe = [];
      console.log(typeof(houe));
      console.log(file);
    }

  }
  // addRealatedProducts(productName, productId) {
  //   this.related.push({
  //   productName,
  //   productId
  //   });

  // }


  upload() {
    console.log(this.stroies.value);
    this.storiesService.uploadStories(toFormData(this.stroies.value)).subscribe();
  }



  ngOnInit(): void {
    this.getFormInfo();

  }

}
