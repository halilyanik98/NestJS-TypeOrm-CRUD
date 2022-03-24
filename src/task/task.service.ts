import {Injectable, Request} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "./entities/task.entity";
import {Repository} from "typeorm";
import {CreateTaskDto} from "./dto/create-task.dto";
import {UpdateTaskDto} from "./dto/update-task.dto";


@Injectable()
export class TaskService{
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>) {}


    findAll(p: { relations: string[] }): Promise<Task[]> {
        return this.taskRepository.find({ relations: ['userId'] });
    }

    findOne(id:number): Promise<Task> {
        return this.taskRepository.findOne(id);
        //userId==id olanları göster.
    }

    create(createTaskDto: CreateTaskDto,@Request() req) {
        const task=new Task();
        task.tasking=createTaskDto.tasking;
        task.userId=req.user['id'];


        return this.taskRepository.save(task)
    }

    update(id: number, updateTaskDto: UpdateTaskDto) {
        return this.taskRepository.update(id,updateTaskDto);
    }

    remove(id: number) {
        return this.taskRepository.delete(id);
    }



}