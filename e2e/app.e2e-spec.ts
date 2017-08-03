import { CharlesWebapp1Page } from './app.po';

describe('charles-webapp1 App', () => {
  let page: CharlesWebapp1Page;

  beforeEach(() => {
    page = new CharlesWebapp1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
