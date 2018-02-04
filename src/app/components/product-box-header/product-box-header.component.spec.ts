import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBoxHeaderComponent } from './product-box-header.component';

describe('ProductBoxHeaderComponent', () => {
  let component: ProductBoxHeaderComponent;
  let fixture: ComponentFixture<ProductBoxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBoxHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBoxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
