import { Task } from "../../login/entities/task.entity";
import { Repository } from "typeorm";
export declare type User = any;
export declare class UsersService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    private readonly users;
    findOne(username: string, password: string): Promise<User | undefined>;
}
