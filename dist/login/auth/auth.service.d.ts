import { JwtService } from '@nestjs/jwt';
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
export declare class AuthService {
    private jwtService;
    private userRepository;
    constructor(jwtService: JwtService, userRepository: Repository<User>);
    validateUser(username: number, pass: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    findAll(p: {
        relations: string[];
    }): Promise<User[]>;
    find_One(id: number): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<CreateUserDto & User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
