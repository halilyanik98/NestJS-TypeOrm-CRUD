import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { Task } from "../entities/task.entity";
import { CreateTaskDto } from "../dto/create-task.dto";
export declare class AuthService {
    private usersService;
    private jwtService;
    private userRepository;
    private taskRepository;
    constructor(usersService: UsersService, jwtService: JwtService, userRepository: Repository<User>, taskRepository: Repository<Task>);
    validateUser(username: number, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    findAll(p: {
        relations: string[];
    }): Promise<User[]>;
    find_One(id: number): Promise<User>;
    create2(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    create(createUserDto: CreateUserDto, createTaskDto: CreateTaskDto): Promise<(CreateUserDto & User) | (CreateTaskDto & Task)>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    getAllAddressesWithUsers(): Promise<User[]>;
}
