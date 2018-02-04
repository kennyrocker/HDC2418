import { Component, Input, OnInit } from '@angular/core';
import { WebService } from 'app/services/web-service';


@Component({
  selector: 'product-box-component',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})

export class ProductBoxComponent {

  public displayOnePerRow: boolean;
  public maxProductDisplay: number;
  public allProducts: any;
  public products: any;

  constructor(private webServie: WebService) {}

  ngOnInit(): void {
    // this.webServie.getItemCount().subscribe((response: any) =>{
    //     this.maxProductDisplay = response;
    // });
    this.maxProductDisplay = this.webServie.getItemCount();
    this.allProducts = this.webServie.getProducts();
    this.products = this.filterProducts(this.maxProductDisplay, this.allProducts);
  }

  public filterProducts(maxDisplay: number, allProducts: any): any {
    if (allProducts.length <= maxDisplay) {
      return allProducts;
    }
    if (maxDisplay === 0) {
      return [];
    }
    return allProducts.splice(0, maxDisplay);
  }
}
