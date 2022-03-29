import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/entities/user.entity";
import {Task} from "../task/entities/task.entity";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./guard/constants";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {LocalStrategy} from "./guard/local.strategy";
import {JwtStrategy} from "./guard/jwt.strategy";


@Module({
    imports: [TypeOrmModule.forFeature([User,Task]),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '600s' },
        }),
    ],
    controllers:[AuthController],
    providers: [AuthService,LocalStrategy, JwtStrategy],
    exports:[],
})

export class AuthModule {}