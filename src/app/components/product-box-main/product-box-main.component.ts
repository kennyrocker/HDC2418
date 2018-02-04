import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-box-main',
  templateUrl: './product-box-main.component.html',
  styleUrls: ['./product-box-main.component.scss']
})
export class ProductBoxMainComponent implements OnInit {

  @Input() data;
  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    console.log(this.data.url);
  }

}
