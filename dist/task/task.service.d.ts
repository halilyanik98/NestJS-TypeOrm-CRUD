import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { TaskOnly } from './entities/task.entity';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<TaskOnly>);
    findAll(): Promise<TaskOnly[]>;
    findOne(id: number): Promise<TaskOnly>;
    create(createTaskDto: CreateTaskDto): Promise<CreateTaskDto & TaskOnly>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
