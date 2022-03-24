import {Module} from "@nestjs/common";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {Task} from "../entities/task.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User,Task]),],
    controllers: [UserController],
    providers:[UserService],
    exports : []
})
export class UserModule{}