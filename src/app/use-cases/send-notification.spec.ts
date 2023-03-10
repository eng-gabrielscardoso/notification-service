import { InMemoryNotificationsRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'recipient-id',
    });

    await expect(notificationsRepository.notifications).toHaveLength(1);
    await expect(notificationsRepository.notifications[0]).toEqual(
      notification,
    );
  });
});
