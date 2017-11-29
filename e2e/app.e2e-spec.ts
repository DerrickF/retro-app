import { RetroAppPage } from './app.po';

describe('retro-app App', () => {
  let page: RetroAppPage;

  beforeEach(() => {
    page = new RetroAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
