import { Todo } from '../entities/todo';

export abstract class TodoRepository {
  abstract create(todo: Todo): Promise<void>;
  abstract findById(todoId: string): Promise<Todo | null>;
  abstract save(todo: Todo): Promise<void>;
  abstract findManyByUserId(userId: string): Promise<Todo[]>;
  abstract countManyByUserId(userId: string): Promise<number>;
}
