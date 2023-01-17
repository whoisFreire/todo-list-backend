import { Todo } from 'src/application/entities/todo';
import { TodoRepository } from 'src/application/repositories/todo-repository';
import { TodoNotFound } from './errors/todo-not-found';

interface UpdateTodoUndoneRequest {
  todoId: string;
}

interface UpdateTodoUndoneResponse {
  todo: Todo;
}

export class UpdateTodoUndoneUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(
    request: UpdateTodoUndoneRequest,
  ): Promise<UpdateTodoUndoneResponse> {
    const { todoId } = request;
    const todo = await this.todoRepository.findById(todoId);

    if (!todo) throw new TodoNotFound();

    todo.undone();

    await this.todoRepository.save(todo);

    return { todo };
  }
}
