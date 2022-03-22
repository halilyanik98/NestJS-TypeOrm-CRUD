import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Task } from "../entities/task.entity";
import { Repository } from "typeorm";
import { CreateTaskDto } from "../../task/dto/create-task.dto";
import { UpdateTaskDto } from "../../task/dto/update-task.dto";
export declare class AuthService {
    private usersService;
    private jwtService;
    private taskRepository;
    constructor(usersService: UsersService, jwtService: JwtService, taskRepository: Repository<Task>);
    validateUser(username: string, passt: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    create(createTaskDto: CreateTaskDto): Promise<{
        id?: number;
        task?: string;
    }[]>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
