import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/entities/user.entity";
import {Task} from "./entities/task.entity";
import {TaskService} from "./task.service";
import {TaskController} from "./task.controller";
import {Module} from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Task]),],
    controllers :[TaskController],
    providers:[TaskService],
    exports:[]
})
export class TaskModule{}