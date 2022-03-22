import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    find(): Promise<void>;
    findAll(): Promise<import("./entities/task.entity").TaskOnly[]>;
    findOne(id: number): Promise<import("./entities/task.entity").TaskOnly>;
    create(createTaskDto: CreateTaskDto): Promise<CreateTaskDto & import("./entities/task.entity").TaskOnly>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
