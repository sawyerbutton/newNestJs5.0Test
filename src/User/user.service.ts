import {Component,Inject} from '@nestjs/common';
import {UserEntity} from './user.entity';
import {Repository} from 'typeorm';

@Component()
export class UserService {
 constructor(
   @Inject('UserRepository') private userRepository: Repository<UserEntity>
 ){}

 public async getAllUser():Promise<Array<UserEntity>>{
   return await this.userRepository.find();
 }

 public async addUser(user:any):Promise<UserEntity>{
   return await this.userRepository.save(user);
 }
}