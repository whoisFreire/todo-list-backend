import { Todo } from 'src/application/entities/todo';
import { TodoRepository } from 'src/application/repositories/todo-repository';

export class InMemoryTodoRepository implements TodoRepository {
  public todos: Todo[] = [];
  async create(todo: Todo): Promise<void> {
    this.todos.push(todo);
  }
  async findById(todoId: string): Promise<Todo> {
    const todo = this.todos.find((todo) => todo.id === todoId);
    return todo;
  }
  async save(todo: Todo): Promise<void> {
    const todoIndex = this.todos.findIndex((td) => td.id === todo.id);
    if (todoIndex >= 0) {
      this.todos[todoIndex] = todo;
    }
  }
  async findManyByUserId(userId: string): Promise<Todo[]> {
    return this.todos.filter((todo) => todo.userId === userId);
  }
  async countManyByUserId(userId: string): Promise<number> {
    return this.todos.filter((todo) => todo.userId === userId).length;
  }
}
