import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from  './users.service'

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService){}
  
  @Get()
  getUsers(){
    return this.usersService.findAll() 
  }

  @Get(':id')
  getOne(@Param('id') id: string){
    return this.usersService.findById(Number(id))
  }

  @Post()
  createUser(@Body('username') username: string, @Body('surname') surname: string){
    return this.usersService.createUser(username, surname)
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string){
    return this.usersService.deleteUser(Number(id))
  }
}
