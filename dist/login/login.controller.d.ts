import { AuthService } from './auth/auth.service';
import { CreateTaskDto } from "../task/dto/create-task.dto";
import { UpdateTaskDto } from "../task/dto/update-task.dto";
export declare class LoginController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    findAll(): Promise<import("./entities/task.entity").Task[]>;
    findOne(id: number): Promise<import("./entities/task.entity").Task>;
    create(createTaskDto: CreateTaskDto): Promise<{
        id?: number;
        task?: string;
    }[]>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
