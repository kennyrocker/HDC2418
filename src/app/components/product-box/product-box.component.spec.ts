import { ProductBoxComponent } from './product-box.component';
import { WebService } from 'app/services/web-service';
import { Http } from '@angular/http';

describe('ProductBoxComponent', () => {
  let component: ProductBoxComponent;
  let webService: WebService;
  let http: Http;
  webService = new WebService(http);
  component = new ProductBoxComponent(webService);

  it('when maxProductDisplay number is 0 products array should be empty', () => {
      let totalProducts = webService.getProducts();
      let products = component.filterProducts(0, totalProducts);
      expect(totalProducts.length === 0);
  });

  it('when maxProductDisplay number is greater than 0 products array should not be empty', () => {
    let totalProducts = webService.getProducts();
    let products = component.filterProducts(1, totalProducts);
    expect(totalProducts.length !== 0);
  });

  it('maxProductDisplay number should be the same as the number of product in products array', () => {
    let totalProducts = webService.getProducts();
    let products = component.filterProducts(3, totalProducts);
    expect(totalProducts.length === 3);
  });


});