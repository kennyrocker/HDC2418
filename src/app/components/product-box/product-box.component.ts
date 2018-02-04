import { Component, Input, OnInit } from '@angular/core';
import { WebService } from 'app/services/web-service';


@Component({
  selector: 'product-box-component',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})

export class ProductBoxComponent {

  public maxProductDisplay: number;
  public allProducts: any;
  public products: any;

  constructor(private webServie: WebService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
    // this.webServie.getItemCount().subscribe((response: any) =>{
    //     this.maxProductDisplay = response;
    // });
    this.maxProductDisplay = this.webServie.getItemCount();
    this.allProducts = this.webServie.getProducts();
    if(this.maxProductDisplay > 0){
      this.products = this.filterProducts(this.maxProductDisplay, this.allProducts);
    } else {
      this.products = [];
    }
  }

  private filterProducts(maxDisplay: number, allProducts: any): any {
    if (allProducts.length <= maxDisplay) {
      return allProducts;
    } else {
      return allProducts.splice(0, maxDisplay);
    }
  }

}
