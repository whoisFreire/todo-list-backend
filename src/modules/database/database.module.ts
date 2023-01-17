import { Module } from '@nestjs/common';
import { TodoRepository } from 'src/application/repositories/todo-repository';
import { UserRepository } from 'src/application/repositories/user-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaTodosRepository } from './prisma/repositories/prisma-todos-repository';
import { PrismaUsersRepository } from './prisma/repositories/prisma-users-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUsersRepository,
    },
    {
      provide: TodoRepository,
      useClass: PrismaTodosRepository,
    },
  ],
  exports: [UserRepository, TodoRepository],
})
export class DatabaseModule {}
