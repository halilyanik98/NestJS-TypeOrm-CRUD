import {Injectable, Request} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "./entities/task.entity";
import {Repository} from "typeorm";
import {CreateTaskDto} from "./dto/create-task.dto";
import {UpdateTaskDto} from "./dto/update-task.dto";
import {User} from "../user/entities/user.entity";
import {Category} from "../category/entities/category.entity";


@Injectable()
export class TaskService{
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ) {}


    create(createTaskDto: CreateTaskDto,@Request() req) {
        const createTask=this.taskRepository
            .createQueryBuilder()
            .insert()
            .into(Task)
            .values([
                { tasking: createTaskDto.tasking, user: req.user['id'], ctgr: createTaskDto.ctgr,endDate:createTaskDto.endDate },
            ])
            .execute()
    }

    findAll(p: { relations: string[] }): Promise<Task[]> {
        return this.taskRepository.find({ relations: ['user','ctgr']});
    }

    findOne(id:number): Promise<Task[]> {
        return this.taskRepository.find({relations: ['user','ctgr'],
            where: {
                user: id,
            },
        });
    }
    update(userId:number, updateTaskDto: UpdateTaskDto) {

        if(updateTaskDto.endDate!==null){
            const  updateTask= this.taskRepository.createQueryBuilder()
                .update(Task)
                .set({ tasking: updateTaskDto.tasking, ctgr: updateTaskDto.ctgr, endDate:updateTaskDto.endDate,isActive:true})
                .where("id = :id AND userId = :userId", { id: updateTaskDto.id, userId:userId})
                .execute()
        }
        else{
            const updateTask2= this.taskRepository
                .createQueryBuilder()
                .update(Task)
                .set({ tasking: updateTaskDto.tasking, ctgr: updateTaskDto.ctgr, endDate:updateTaskDto.endDate })
                .where("id = :id AND userId = :userId", { id: updateTaskDto.id, userId:userId})
                .execute()
        }

    }

    remove(id: number, req:number) {

        const user =  this.taskRepository
            .createQueryBuilder()
            .delete()
            .from(Task)
            .where("id = :id AND userId = :userId", {id:id['id'], userId:req})
            .execute()




    }
}