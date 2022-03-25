import {Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Task} from "../task/entities/task.entity";
import {Category} from "../category/entities/category.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User,Task,Category]),],
    controllers: [UserController],
    providers:[UserService],
    exports : []
})
export class UserModule{}