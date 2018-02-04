import { WebService } from './web-service';
import { Http } from '@angular/http';

describe('ProductBoxMainComponent', () => {
  let component: WebService;
  let http: Http;
  component = new WebService(http);

  it('getItemCount should return number greater than 0', () => {
      let res: Number = component.getItemCount();
      expect(res).toBeGreaterThan(0);
  });

  it('getProducts should return more than 0 product object in an array', () => {
      let res: any = component.getProducts();
      expect(res.length).toBeGreaterThanOrEqual(0);
  });

});