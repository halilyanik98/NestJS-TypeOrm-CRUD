import { AuthService } from './auth/auth.service';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateTaskDto } from "./dto/create-task.dto";
export declare class LoginController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    find_One(id: number): Promise<import("./entities/user.entity").User>;
    create(createUserDto: CreateUserDto, createTaskDto: CreateTaskDto): Promise<import("./entities/user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
