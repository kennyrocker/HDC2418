import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class WebService {

    public API_BASE_URL = 'localhost:3000';
    private dest: string;

    constructor(private http: Http) {}

    // public getItemCount(): Observable<any> {
    //     this.dest = `${this.API_BASE_URL}/itemCount`;
    //     // mock return
    //     return this.http.get(this.dest).map((res) => res.json());
    // }

    // mock item count
    public getItemCount(): any {
        this.dest = `${this.API_BASE_URL}/itemCount`;
        // mock return
        return 5;
    }

    // Mock getProduct Service
    public getProducts(): any {
        this.dest = `${this.API_BASE_URL}/getProducts`;
        // mock return
        return [
            {
              'id' : '101',
              'image' : 'assets/images/products/product_1.jpg',
              'url': '#',
              'manufacturer' : 'Home Decorators Collection',
              'name': '12mm Wintour Maple Classic Laminate Flooring (17.26 sq. ...',
              'model': '7L12X165/8045CL',
              'sku':'1001002632',
              'offersScope':'',
              'offersType':'http://schema.org/Offer',
              'priceCurrency':'$',
              'itemCondition':'New',
              'itemConditionHref':'http://schema.org/NewCondition',
              'price':'34.00',
              'unit': '/ case'
            },
            {
              'id' : '102',
              'image' : 'assets/images/products/product_1.jpg',
              'url': '#',
              'manufacturer' : 'Home Decorators Collection',
              'name': '12mm Wintour Maple Classic Laminate Flooring (17.26 sq. ...',
              'model': '7L12X165/8045CL',
              'sku':'1001002632',
              'offersScope':'',
              'offersType':'http://schema.org/Offer',
              'priceCurrency':'$',
              'itemCondition':'New',
              'itemConditionHref':'http://schema.org/NewCondition',
              'price':'34.00',
              'unit': '/ case'
            },
            {
              'id' : '103',
              'image' : 'assets/images/products/product_1.jpg',
              'url': '#',
              'manufacturer' : 'Home Decorators Collection',
              'name': '12mm Wintour Maple Classic Laminate Flooring (17.26 sq. ...',
              'model': '7L12X165/8045CL',
              'sku':'1001002632',
              'offersScope':'',
              'offersType':'http://schema.org/Offer',
              'priceCurrency':'$',
              'itemCondition':'New',
              'itemConditionHref':'http://schema.org/NewCondition',
              'price':'34.00',
              'unit': '/ case'
            },
            {
                'id' : '103',
                'image' : 'assets/images/products/product_1.jpg',
                'url': '#',
                'manufacturer' : 'Home Decorators Collection',
                'name': '12mm Wintour Maple Classic Laminate Flooring (17.26 sq. ...',
                'model': '7L12X165/8045CL',
                'sku':'1001002632',
                'offersScope':'',
                'offersType':'http://schema.org/Offer',
                'priceCurrency':'$',
                'itemCondition':'New',
                'itemConditionHref':'http://schema.org/NewCondition',
                'price':'34.00',
                'unit': '/ case'
              }
        ];
    }
}