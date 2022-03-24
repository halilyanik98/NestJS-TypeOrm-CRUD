import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class AuthService{
    constructor(private jwtService:JwtService,
                @InjectRepository(User)
                private userRepository:Repository<User>
                ){}

    //Doğrulama yapılmaktadır -------------------------------01
    async validateUser(username: string, pass: string): Promise<any> {
        console.log('auth.service-validateUser');
        const user = await this.userRepository.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        console.log("auth.service-project");
        const payload = { userId: user.userId,username: user.username , password: user.password, newTask: user.newTask };
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}