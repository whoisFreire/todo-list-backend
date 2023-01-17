import { Module } from '@nestjs/common';
import { GetUserTodosUseCase } from 'src/application/usecases/todo/get-user-todos-use-case';
import { CreateUserUseCase } from 'src/application/usecases/user/create-user-use-case';
import { UpdateUserEmailUseCase } from 'src/application/usecases/user/update-user-email-use-case';
import { UpdateUserPasswordUseCase } from 'src/application/usecases/user/update-user-password-use-case';
import { DatabaseModule } from '../database/database.module';
import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule],
  providers: [
    CreateUserUseCase,
    UpdateUserEmailUseCase,
    UpdateUserPasswordUseCase,
    GetUserTodosUseCase,
  ],
  controllers: [UserController],
})
export class UserModule {}
