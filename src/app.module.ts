import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatsModule } from './chats/chats.module';
import { UsersModule } from './users/users.module';
import { NotificationsModule } from './notifications/notifications.module';
import { GroupModule } from './group/group.module';


@Module({
  imports: [ChatsModule, UsersModule, NotificationsModule, GroupModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
