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
    images: ['string'],
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

  constructor(private prodService: ProductsService, private formBuilder: FormBuilder) { }

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
  }

  ngOnInit(): void {
    this.allProducts();
  }

}
