import { TodoRepository } from 'src/application/repositories/todo-repository';

interface CountUserTodosRequest {
  userId: string;
}

interface CountUserTodosResponse {
  count: number;
}

export class CountUserTodosUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(
    request: CountUserTodosRequest,
  ): Promise<CountUserTodosResponse> {
    const { userId } = request;
    const count = await this.todoRepository.countManyByUserId(userId);
    return {
      count,
    };
  }
}
