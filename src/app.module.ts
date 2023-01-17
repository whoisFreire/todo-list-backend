import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { TodoModule } from './modules/todo/todo.module';

@Module({
  imports: [DatabaseModule, UserModule, TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
