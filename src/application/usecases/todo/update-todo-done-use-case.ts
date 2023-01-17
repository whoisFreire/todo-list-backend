import { Todo } from 'src/application/entities/todo';
import { TodoRepository } from 'src/application/repositories/todo-repository';
import { TodoNotFound } from './errors/todo-not-found';

interface UpdateTodoDoneRequest {
  todoId: string;
}

interface UpdateTodoDoneResponse {
  todo: Todo;
}

export class UpdateTodoDoneUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(
    request: UpdateTodoDoneRequest,
  ): Promise<UpdateTodoDoneResponse> {
    const { todoId } = request;
    const todo = await this.todoRepository.findById(todoId);

    if (!todo) throw new TodoNotFound();

    todo.done();
    await this.todoRepository.save(todo);
    return {
      todo,
    };
  }
}
