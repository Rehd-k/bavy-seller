import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';
import { ProductsService } from '../core/shared/services/products.service';


@Component({
  selector: 'app-productd',
  templateUrl: './productd.component.html',
  styleUrls: ['./productd.component.scss']
})
export class ProductdComponent implements OnInit {


  imagesReview = [];
  Files: FileList;


  titles;
  selectedFor = false;
  uploadProducts: FormGroup;
  readonly maxSize = 52428800;
  uploadResponse = { status: '', message: '', filePath: '' };


  constructor(private prodService: ProductsService, private formBuilder: FormBuilder) { }


  getTitle() {
    const titlesObj = this.prodService.GetTitle(this.uploadProducts.value.for);
    this.titles = Object.values(titlesObj)[0];
    this.selectedFor = true;
    console.log(this.titles);
  }

  clearImages() {
    this.imagesReview = [];
  }

  //  MAIN ONE
  selectFiles(event) {
    this.imagesReview = [];
    if (event.target.files && event.target.files[0]) {
      this.Files = event.target.files;
      for (let i = 0; i < this.Files.length; i++) {
        this.prodService.formData.append('images', this.Files[i])
        const reader = new FileReader();
        // tslint:disable-next-line: no-shadowed-variable
        reader.onload = (event: any) => {
          this.imagesReview.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }


  getFormInfo() {
    this.uploadProducts = this.formBuilder.group({
      subtitle: ['', [Validators.required]],
      category: ['', [Validators.required]],
      for: ['', [Validators.required]],
      title: [{ value: '', disabled: this.selectedFor }, [Validators.required]],
      Description: ['', [Validators.required]],
      Features: [''],
      Specification: [''],
      price: ['', [Validators.required]],
      DiscountPrice: [''],
      size: [''],
      color: [''],
      weight: [''],
      Lenght: [''],
      mainMaterial: [''],
      stockLevel: [''],
      // Remeber to do the photo valdaton when nex ur dataed
      picture: [undefined],
      tags: ['', [Validators.required]]

    });
  }

  get productFormData() {
    const controls = 'controls';
    return this.uploadProducts[controls];
  }


  submit() {
    this.imagesReview = [];
    this.prodService.UploadProduct(this.prodService.toFormData(this.uploadProducts.value)).subscribe(res => {
      console.log(res);
      this.prodService.clearForm();
    }
      );
    

  }

  ngOnInit(): void {
    this.getFormInfo();
  }

}
