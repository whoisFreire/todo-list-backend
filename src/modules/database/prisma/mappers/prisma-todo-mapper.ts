import { Todo } from 'src/application/entities/todo';
import { Todo as RawTodo } from '@prisma/client';

export class PrismaTodoMapper {
  static toPrisma(todo: Todo) {
    return {
      id: todo.id,
      title: todo.title,
      userId: todo.userId,
      isDone: todo.isDone,
      createdAt: todo.createdAt,
    };
  }

  static toDomain(raw: RawTodo) {
    return new Todo(
      {
        title: raw.title,
        userId: raw.userId,
        isDone: raw.isDone,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
