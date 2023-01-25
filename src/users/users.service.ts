import { Injectable } from '@nestjs/common';

type User = {
  id: number
  username: string
  surname: string
}

@Injectable()
export class UsersService {

  private users: User[] = [{id: 0, username: 'John' , surname: 'Doe'}]

  findAll(){
    return this.users
  }

  findById(id: number) {
    return this.users.find(user => user.id === id)
  }

  createUser(username: string, surname: string){
    const id = this.users.length + 1
    return this.users.push({id, username, surname})
  }

  deleteUser(id: number){
    this.users = this.users.filter(user => user.id !== id)
    return { status: 200, message: 'deleted user'}
  }
}
