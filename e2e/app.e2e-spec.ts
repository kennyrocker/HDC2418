import { DeveloperTestPage } from './app.po';

describe('developer-test App', () => {
  let page: DeveloperTestPage;

  beforeEach(() => {
    page = new DeveloperTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
