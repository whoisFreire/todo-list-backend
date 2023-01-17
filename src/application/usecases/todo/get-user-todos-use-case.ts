import { Injectable } from '@nestjs/common';
import { Todo } from 'src/application/entities/todo';
import { TodoRepository } from 'src/application/repositories/todo-repository';

interface GetUserTodosRequest {
  userId: string;
}

interface GetUserTodosResponse {
  todos: Todo[];
}

@Injectable()
export class GetUserTodosUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(request: GetUserTodosRequest): Promise<GetUserTodosResponse> {
    const { userId } = request;
    const todos = await this.todoRepository.findManyByUserId(userId);

    return {
      todos,
    };
  }
}
