import { Nagular2AppPage } from './app.po';

describe('nagular2-app App', function() {
  let page: Nagular2AppPage;

  beforeEach(() => {
    page = new Nagular2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
