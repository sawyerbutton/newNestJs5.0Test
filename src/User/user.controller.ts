import {Controller,Get,Post,Body} from '@nestjs/common';
import {UserService} from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService:UserService
  ){}

  @Get()
  public async getAllUser(){
    return await this.userService.getAllUser();
  }

  @Post()
  public async addUser(@Body() user){
    return await this.userService.addUser(user);
  }
}