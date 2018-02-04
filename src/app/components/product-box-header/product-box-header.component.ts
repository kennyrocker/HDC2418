import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-box-header',
  templateUrl: './product-box-header.component.html',
  styles: []
})
export class ProductBoxHeaderComponent {

  @Input() id;
  @Input() image;
  constructor() {}

}
