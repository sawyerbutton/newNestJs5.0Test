import {Controller,Get} from '@nestjs/common';
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
}