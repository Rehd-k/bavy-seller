import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Products } from '../products.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private Http: HttpClient) { }

  apiBaseUrl = environment.url;

  public titleHolder = [
    {
      skinCare: ['Moisturizers', 'Cleansers', 'Exfoliators', 'Anti-aging', 'Treatments'],
      for: 'skinCare'
    },
    {
      men: ['watches', 'clothing', 'Shoes', 'Accessories', 'Jewelry'],
      for: 'men'
    },
    {
      women: ['Clothing', 'Shoes', 'watches', 'Jewelry', 'handbags and wallets', 'Womens accessories'],
      for: 'women'
    },
    {
      fragrance: ['Women', 'Men', 'Unisex'],
      for: 'fragrance'
    },
    {
      hairCare: ['Extensions and Wigs', 'Hair and Scalp Care', 'Hair Accessories', 'Hair loss porducts'],
      for: 'hairCare'
    }
  ];

  private extractData(res: Products) {
    const body = res;
    return body;
  }

  /*
    Upload Products
  */

  UploadProduct(product: any): Observable<any> {
    return this.Http.post(`${this.apiBaseUrl}seller/create/products`, product, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {

        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }

  /*
 * updateProduct
 */

  updateProducts(productId: string, product: any) {
    return this.Http
      .put(`${this.apiBaseUrl}updateProduct/${productId}`, product).pipe(
        map(this.extractData)
      );
  }

  /*
  * delete product
  */

  deleteProducts(productId: string) {
    return this.Http
      .delete(`${this.apiBaseUrl}removeProduct/${productId}`);
  }

  /*
  * get Products
  */

  getProducts() {
    return this.Http.get(`${this.apiBaseUrl}products`).pipe(
        map(this.extractData));
  }

  /**
   * GetTitle
   */

  GetTitle(selectedFor: string) {
    return this.titleHolder.find(res =>
      res.for === selectedFor
    );
  }









}
