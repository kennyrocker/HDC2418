import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-box-main',
  templateUrl: './product-box-main.component.html',
  styles: []
})
export class ProductBoxMainComponent {

  @Input() data;
  constructor(public sanitizer: DomSanitizer) {
  }
}
