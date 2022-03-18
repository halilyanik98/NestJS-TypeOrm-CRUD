import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Task } from "../entities/task.entity";
import { Repository } from "typeorm";
export declare class AuthService {
    private usersService;
    private jwtService;
    private taskRepository;
    constructor(usersService: UsersService, jwtService: JwtService, taskRepository: Repository<Task>);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
