import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
export declare class AuthService {
    private usersService;
    private jwtService;
    private taskRepository;
    constructor(usersService: UsersService, jwtService: JwtService, taskRepository: Repository<User>);
    validateUser(id: number, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
