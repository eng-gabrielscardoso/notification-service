import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', async () => {
    await expect(
      () => new Content('You received a friendship solicitation from John Doe'),
    ).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characters', async () => {
    await expect(() => new Content('You')).toThrow();
  });

  it('should not be able to create a notification content with more than 255 characters', async () => {
    await expect(() => new Content('a'.repeat(256))).toThrow();
  });
});
