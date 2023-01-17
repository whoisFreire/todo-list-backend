import { Todo } from 'src/application/entities/todo';

export class TodoViewModel {
  static toHTTP(todo: Todo) {
    return {
      id: todo.id,
      title: todo.title,
      isDone: todo.isDone,
      createdAt: todo.createdAt,
    };
  }
}
