import { TaskService } from "./task.service";
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    findAll(): Promise<import("../entities/task.entity").Task[]>;
}
