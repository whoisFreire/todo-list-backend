import { Module } from '@nestjs/common';
import { CountUserTodosUseCase } from 'src/application/usecases/todo/count-user-todos-use-case';
import { CreateTodoUseCase } from 'src/application/usecases/todo/create-todo-use-case';
import { GetUserTodosUseCase } from 'src/application/usecases/todo/get-user-todos-use-case';
import { UpdateTodoDoneUseCase } from 'src/application/usecases/todo/update-todo-done-use-case';
import { UpdateTodoUndoneUseCase } from 'src/application/usecases/todo/update-todo-undone-use-case';
import { DatabaseModule } from '../database/database.module';
import { TodoController } from './todo.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoController],
  providers: [
    CreateTodoUseCase,
    GetUserTodosUseCase,
    UpdateTodoDoneUseCase,
    UpdateTodoUndoneUseCase,
    CountUserTodosUseCase,
  ],
})
export class TodoModule {}
