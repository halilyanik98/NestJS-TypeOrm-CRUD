import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "../entities/task.entity";
import {Repository} from "typeorm";


@Injectable()
export class TaskService{
    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>) {}


    findAll(p: { relations: string[] }): Promise<Task[]> {
        return this.taskRepository.find({ relations: ['qTask'] });
    }



}