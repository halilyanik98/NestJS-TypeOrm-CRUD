import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Task} from "../../login/entities/task.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    providers: [UsersService],
    exports:[UsersService]
})
export class UsersModule {}
