import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ProductBoxHeaderComponent } from 'app/components/product-box-header/product-box-header.component';
import { ProductBoxComponent } from 'app/components/product-box/product-box.component';
import { ProductBoxMainComponent } from 'app/components/product-box-main/product-box-main.component';
import { WebService } from 'app/services/web-service';
import { HttpModule } from '@angular/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      declarations: [
        AppComponent,
        ProductBoxComponent,
        ProductBoxHeaderComponent,
        ProductBoxMainComponent
      ],
      providers: [
        WebService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it('should render Welcome to the application, here is where your main code will lie in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to the application, here is where your main code will lie');
  }));
});
