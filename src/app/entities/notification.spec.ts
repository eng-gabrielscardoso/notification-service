import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', async () => {
    await expect(
      () =>
        new Notification({
          recipientId: 'example-recipient-id',
          content: new Content('You received a notification'),
          category: 'social',
        }),
    ).toBeTruthy();
  });
});
