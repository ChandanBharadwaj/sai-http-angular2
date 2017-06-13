import { SaiHttpAngular2Page } from './app.po';

describe('sai-http-angular2 App', () => {
  let page: SaiHttpAngular2Page;

  beforeEach(() => {
    page = new SaiHttpAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
