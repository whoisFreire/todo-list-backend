import { Injectable } from '@nestjs/common';
import { Todo } from 'src/application/entities/todo';
import { TodoRepository } from 'src/application/repositories/todo-repository';
import { UserRepository } from 'src/application/repositories/user-repository';
import { UserNotFound } from '../user/errors/user-not-found';

interface CreateTodoRequest {
  userId: string;

  title: string;
}
interface CreateTodoResponse {
  todo: Todo;
}

@Injectable()
export class CreateTodoUseCase {
  constructor(
    private readonly todoRepository: TodoRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(request: CreateTodoRequest): Promise<CreateTodoResponse> {
    const { userId, title } = request;
    const user = await this.userRepository.findById(userId);

    if (!user) throw new UserNotFound();

    const newTodo = new Todo({ title, userId });
    await this.todoRepository.create(newTodo);
    return {
      todo: newTodo,
    };
  }
}
