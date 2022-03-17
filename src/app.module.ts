import { Module } from '@nestjs/common';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { TaskService } from './task/task.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';

import {JwtModule, JwtService} from "@nestjs/jwt";
import {AuthModule} from "./login/auth/auth.module";
import {UsersModule} from "./login/users/users.module";
import {AuthService} from "./login/auth/auth.service";
import {UsersService} from "./login/users/users.service";
import {LoginController} from "./login/login.controller";


@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await getConnectionOptions(), {
        autoLoadEntities: true,
      }),
  }),TaskModule,AuthModule, UsersModule],

 // imports: [AuthModule, UsersModule],
  controllers: [TaskController,LoginController],
  providers: [TaskService,AuthService,UsersService,JwtService],
})
export class AppModule {}


