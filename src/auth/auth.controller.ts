import {Controller, Get, Post, Request, UseGuards} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {LocalAuthGuard} from "./guard/local-auth.guard";
import {JwtAuthGuard} from "./guard/jwt-auth.guard";

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('')
    async login(@Request() req) {
        console.log('Local Guard Post ---auth Controller');
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        console.log('project.controller-profileGet')
        return req.user;
    }
}

