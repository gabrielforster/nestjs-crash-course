import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dtp';
import { User } from './entities/user.entity';
@Injectable()
export class UsersService {
  private users: User[] = [{ id: 0, name: 'John', surname: 'Doe', age: 20 }];

  findAll(): User[] {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    const id = Date.now();
    return this.users.push({ ...createUserDto, id });
  }

  deleteUser(id: number) {
    this.users = this.users.filter((user) => user.id !== id);
    return { status: 200, message: 'deleted user' };
  }
}
