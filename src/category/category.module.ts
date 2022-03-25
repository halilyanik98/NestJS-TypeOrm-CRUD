import {Module} from "@nestjs/common";
import {CategoryController} from "./category.controller";
import {CategoryService} from "./category.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Task} from "../task/entities/task.entity";
import {User} from "../user/entities/user.entity";
import {Category} from "./entities/category.entity";


@Module({
    imports : [TypeOrmModule.forFeature([Task,User,Category]),],
    controllers:[CategoryController],
    providers: [CategoryService],
    exports:[],
})
export class CategoryModule {}