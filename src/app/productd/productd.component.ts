import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';
import { ProductsService } from '../core/shared/services/products.service';
import { toFormData } from '../core/shared/uploadfile';

@Component({
  selector: 'app-productd',
  templateUrl: './productd.component.html',
  styleUrls: ['./productd.component.scss']
})
export class ProductdComponent implements OnInit {

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

  onFileChange(event: { target: { files: string | any[]; }; }) {
    if (event.target.files.length > 0) {
      const files = event.target.files;
      const imgToUpload = [];
      for (const file of files) {
        imgToUpload.push(file);
      }
      console.log(imgToUpload);
      this.uploadProducts.get('images').setValue(imgToUpload);
      console.log(files);
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
      images: [undefined],
      tags: ['', [Validators.required]]

    });
  }

  get productFormData() {
    const controls = 'controls';
    return this.uploadProducts[controls];
  }

  submit() {
    this.prodService.UploadProduct(toFormData(this.uploadProducts.value)).subscribe(res => console.log(res));

    const uploadedFiles = toFormData(this.uploadProducts.value).getAll('images');
    console.log(uploadedFiles);
    for (const file of uploadedFiles) {
        console.log(file);
      }
  }
  ngOnInit(): void {
    this.getFormInfo();
  }

}
