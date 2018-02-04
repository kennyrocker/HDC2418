import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBoxMainComponent } from './product-box-main.component';

describe('ProductBoxMainComponent', () => {
  let component: ProductBoxMainComponent;
  let fixture: ComponentFixture<ProductBoxMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBoxMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBoxMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
