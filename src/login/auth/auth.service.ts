import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "../entities/task.entity";
import {Repository} from "typeorm";
import {CreateTaskDto} from "../../task/dto/create-task.dto";
import {UpdateTaskDto} from "../../task/dto/update-task.dto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {}
//Doğrulama yapılmaktadır -------------------------------01
    async validateUser(username: string, passt: string): Promise<any> {
        console.log('validateUser');
        const user = await this.taskRepository.findOne(username);
        if (user && user.password === passt) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        console.log("Login");
        const payload = { userId: user.userId,username: user.username , password: user.password, newTask: user.newTask };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
//------------------------------------------------------01
    findAll(): Promise<Task[]> {
        return this.taskRepository.find();
    }
    findOne(id: number): Promise<Task> {
        return this.taskRepository.findOne(id);
    }

    create(createTaskDto: CreateTaskDto) {
        return this.taskRepository.save(createTaskDto);
    }

    update(id: number, updateTaskDto: UpdateTaskDto) {
        return this.taskRepository.update(+id,updateTaskDto);
    }

    remove(id: number) {
        return this.taskRepository.delete(id);
    }
}