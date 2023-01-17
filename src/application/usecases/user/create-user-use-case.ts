import { Injectable } from '@nestjs/common';
import { User } from 'src/application/entities/user';
import { UserRepository } from 'src/application/repositories/user-repository';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, email, password } = request;
    const user = new User({ name, email, password });
    await this.userRepository.create(user);
    return {
      user,
    };
  }
}
