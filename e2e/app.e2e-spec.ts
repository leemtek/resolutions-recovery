import { ResolutionsRecoveryPage } from './app.po';

describe('resolutions-recovery App', () => {
  let page: ResolutionsRecoveryPage;

  beforeEach(() => {
    page = new ResolutionsRecoveryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
