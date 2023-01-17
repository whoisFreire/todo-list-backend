import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoUseCase } from 'src/application/usecases/todo/create-todo-use-case';
import { GetUserTodosUseCase } from 'src/application/usecases/todo/get-user-todos-use-case';
import { CreateTodoDTO } from './dtos/create-todo-dto';
import { GetUserTodosDTO } from './dtos/get-user-todos-dto';
import { TodoViewModel } from './view-models/todo-view-model';

@Controller('api/v1/todo')
export class TodoController {
  constructor(
    private readonly creteTodoUseCase: CreateTodoUseCase,
    private readonly getUserTodosUseCase: GetUserTodosUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateTodoDTO) {
    const { title, userId } = body;
    const { todo } = await this.creteTodoUseCase.execute({ title, userId });
    return TodoViewModel.toHTTP(todo);
  }

  @Get()
  async getTodosByUserId(@Body() body: GetUserTodosDTO) {
    const { userId } = body;
    const { todos } = await this.getUserTodosUseCase.execute({ userId });
    return todos.map(TodoViewModel.toHTTP);
  }
}
