import { Task } from "../entities/task.entity";
import { Repository } from "typeorm";
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    findAll(p: {
        relations: string[];
    }): Promise<Task[]>;
}
