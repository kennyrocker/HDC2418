import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-box-header',
  templateUrl: './product-box-header.component.html',
  styleUrls: ['./product-box-header.component.scss']
})
export class ProductBoxHeaderComponent implements OnInit {

  @Input() id;
  @Input() image;
  constructor() {
  }

  ngOnInit() {
  }

}
