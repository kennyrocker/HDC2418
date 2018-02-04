import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebService } from './web-service';

describe('ProductBoxMainComponent', () => {
  let component: WebService;
  let fixture: ComponentFixture<WebService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});