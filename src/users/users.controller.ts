import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger"
import { CreateUserDto } from './dto/create-user.dtp';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.usersService.findById(Number(id));
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(Number(id));
  }
}
