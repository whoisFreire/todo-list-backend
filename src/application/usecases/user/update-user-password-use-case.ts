import { Injectable } from '@nestjs/common';
import { User } from 'src/application/entities/user';
import { UserRepository } from 'src/application/repositories/user-repository';
import { UserNotFound } from './errors/user-not-found';

interface UpdateUserPasswordRequest {
  userId: string;
  password: string;
}

interface UpdateUserPasswordResponse {
  user: User;
}

@Injectable()
export class UpdateUserPasswordUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(
    request: UpdateUserPasswordRequest,
  ): Promise<UpdateUserPasswordResponse> {
    const { userId, password } = request;
    const user = await this.userRepository.findById(userId);

    if (!user) throw new UserNotFound();

    user.password = password;

    await this.userRepository.save(user);
    return {
      user,
    };
  }
}
