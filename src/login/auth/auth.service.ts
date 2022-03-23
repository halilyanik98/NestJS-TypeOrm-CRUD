import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "../dto/create-user.dto";
import {UpdateUserDto} from "../dto/update-user.dto";
import {Task} from "../entities/task.entity";
import {CreateTaskDto} from "../dto/create-task.dto";


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {}

//Doğrulama yapılmaktadır -------------------------------01
    async validateUser(username: number, pass: string): Promise<any> {
        console.log('auth.service-validateUser');
        const user = await this.userRepository.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        console.log("auth.service-login");
        const payload = { userId: user.userId,username: user.username , password: user.password, newTask: user.newTask };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
//------------------------------------------------------01
    findAll(p: { relations: string[] }): Promise<User[]> {
        return this.userRepository.find({ relations: ['dbTask'] });
    }

    find_One(id: number): Promise<User> {
        return this.userRepository.findOne(id);
    }

    create(createUserDto: CreateUserDto,createTaskDto:CreateTaskDto) {
        const task = new Task()
        task.tasking = createTaskDto.task

        const user = new User()
        user.username = createUserDto.username
        user.password = createUserDto.password
        user.dbTask = [task]
        return this.taskRepository.manager.save(user)

    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.userRepository.update(+id,updateUserDto);
    }

    remove(id: number) {
        return this.userRepository.delete(id);
    }

    getAllAddressesWithUsers() {
        return this.userRepository.find({ relations: ['address'] });
    }
}