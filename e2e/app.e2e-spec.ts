import { InvoicingAppPage } from './app.po';

describe('invoicing-app App', function() {
  let page: InvoicingAppPage;

  beforeEach(() => {
    page = new InvoicingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
