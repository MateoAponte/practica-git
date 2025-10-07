import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatsModule } from './chats/chats.module';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [ChatsModule, UsersModule, NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
