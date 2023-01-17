import { User } from 'src/application/entities/user';
import { UserRepository } from 'src/application/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];
  async create(user: User): Promise<void> {
    this.users.push(user);
  }
  async findById(userId: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === userId);
    return user;
  }
  async save(user: User): Promise<void> {
    const userIndex = this.users.findIndex((usr) => usr.id === user.id);
    if (userIndex >= 0) {
      this.users[userIndex] = user;
    }
  }
}
