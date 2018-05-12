import {Module} from '@nestjs/common';
import {DatabaseModule} from '../Database/database.module';
import {UserController} from './user.controller';
import {UserService} from './user.service';
import {userProvider} from './user.provider';

@Module({
  imports:[
    DatabaseModule
  ],
  controllers:[
    UserController
  ],
  components:[
    UserService,
    userProvider
  ]
})

export class UserModule {
  
}