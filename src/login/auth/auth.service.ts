import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {Repository} from "typeorm";
import {CreateUserDto} from "../dto/create-user.dto";
import {UpdateUserDto} from "../dto/update-user.dto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
        @InjectRepository(User)
        private taskRepository: Repository<User>,
    ) {}
//Doğrulama yapılmaktadır -------------------------------01
    async validateUser(id: number, pass: string): Promise<any> {
        const user = await this.taskRepository.findOne(id);
        console.log(user);
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
    findAll(): Promise<User[]> {
        return this.taskRepository.find();
    }
    findOne(id: number): Promise<User> {
        return this.taskRepository.findOne(id);
    }

    create(createUserDto: CreateUserDto) {
        return this.taskRepository.save(createUserDto);
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return this.taskRepository.update(+id,updateUserDto);
    }

    remove(id: number) {
        return this.taskRepository.delete(id);
    }
}