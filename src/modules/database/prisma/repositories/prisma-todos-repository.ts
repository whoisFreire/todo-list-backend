import { Injectable } from '@nestjs/common';
import { Todo } from 'src/application/entities/todo';
import { TodoRepository } from 'src/application/repositories/todo-repository';
import { PrismaTodoMapper } from '../mappers/prisma-todo-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaTodosRepository implements TodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(todo: Todo): Promise<void> {
    const raw = PrismaTodoMapper.toPrisma(todo);
    await this.prisma.todo.create({
      data: raw,
    });
  }

  async findById(todoId: string): Promise<Todo> {
    const todo = await this.prisma.todo.findUnique({
      where: {
        id: todoId,
      },
    });

    if (!todo) return null;

    return PrismaTodoMapper.toDomain(todo);
  }

  async save(todo: Todo): Promise<void> {
    const raw = PrismaTodoMapper.toPrisma(todo);
    await this.prisma.todo.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }

  async findManyByUserId(userId: string): Promise<Todo[]> {
    const todos = await this.prisma.todo.findMany({
      where: {
        userId,
      },
    });
    return todos.map(PrismaTodoMapper.toDomain);
  }

  async countManyByUserId(userId: string): Promise<number> {
    const count = await this.prisma.todo.count({
      where: {
        userId,
      },
    });
    return count;
  }
}
