import { Krisweblab7Page } from './app.po';

describe('krisweblab7 App', function() {
  let page: Krisweblab7Page;

  beforeEach(() => {
    page = new Krisweblab7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
