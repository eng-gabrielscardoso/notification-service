import { randomUUID } from 'node:crypto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  async list(): Promise<unknown> {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody): Promise<unknown> {
    const { recipientId, content, category } = body;

    return await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        recipientId: recipientId,
        content: content,
        category: category,
      },
    });
  }
}
