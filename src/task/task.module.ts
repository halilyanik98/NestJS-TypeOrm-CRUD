import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/entities/user.entity";
import {Task} from "./entities/task.entity";
import {TaskService} from "./task.service";
import {TaskController} from "./task.controller";
import {Module} from "@nestjs/common";
import {Category} from "../category/entities/category.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Task,User,Category]),],
    controllers :[TaskController],
    providers:[TaskService],
    exports:[]
})
export class TaskModule{}