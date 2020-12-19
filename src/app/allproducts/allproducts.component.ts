import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from '../core/shared/products.model';
import { ProductsService } from '../core/shared/services/products.service';

const prodds = [
  {
    _id: 'string',
    subtitle: 'string',
    category: 'string',
    for: 'string',
    title: 'string',
    Description: 'string',
    Features: ['string'],
    Specification: ['string'],
    price: 23,
    DiscountPrice: 23,
    size: ['string'],
    color: ['string'],
    weight: 'string',
    Lenght: 'string',
    mainMaterial: 'string',
    stockLevel: 'string',
    images: [{
      url: 'string'
    }],
    tags: ['string'],
    reviews: [{
      string: 'string'
    }],
    createdOn: 'string',
    verified: 'string'
  }
];

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {


  products: Products[] = prodds;



  selectedProduct: Products;

  selectedFor = false;

  productsInfo: FormGroup;

  imgCol: number;

  sizeCol: number;

  tagCol: number;

  colorCol = 'checking_class';





  constructor(private prodService: ProductsService, private formBuilder: FormBuilder, private http: HttpClient) { }

  prodForm() {
    this.productsInfo = this.formBuilder.group({
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

  allProducts() {
    this.prodService.getProducts().subscribe(
      res => this.products.push()
    );
  }

  updateProduct(id) {
    this.prodService.updateProducts(id, this.productsInfo).subscribe(res => {
      this.selectedProduct = res;
    });
  }

  deleteProducts(id) {
    this.prodService.deleteProducts(id).subscribe();
  }

  selectProduct(selectedId: string) {
    this.selectedProduct = this.products.find(res =>
      res._id === selectedId
    );
    this.colCount();
  }



  colCount() {
    const imglength = this.selectedProduct.images.length;
    const sizes = this.selectedProduct.size.length;
    const colors = this.selectedProduct.color.length;
    const tags = this.selectedProduct.tags.length;


    // imgCol
    if (imglength >= 4) {
      this.imgCol = 4;
    } else {
      this.imgCol = 12 / imglength;
    }


    // sizeCol
    if (sizes >= 4) {
      this.sizeCol = 4;
    } else {
      this.sizeCol = 12 / sizes;
    }

    // tagCol
    if (tags >= 4) {
      this.tagCol = 4;
    } else {
      this.tagCol = 12 / tags;
    }


    // colorCol
    if (colors >= 4) {
      this.colorCol = 'col-4';
    } else {
      const col = 12 / colors;
      this.colorCol = `col-${col}`;
    }


  }

  ngOnInit(): void {
    this.allProducts();
  }

}
