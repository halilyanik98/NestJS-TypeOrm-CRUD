import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import {InjectRepository} from "@nestjs/typeorm";
import {Task} from "../entities/task.entity";
import {Repository} from "typeorm";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        @InjectRepository(Task)
        private taskRepository: Repository<Task>,
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        console.log('auth.service1');
        const user = await this.taskRepository.findOne(username);
        console.log('auth.service2');
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        console.log("logindesin");
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),

        };
    }
}