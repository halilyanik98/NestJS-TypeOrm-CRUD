import { Controller, Get, Request, Post, UseGuards, Param, Body } from '@nestjs/common';
import { JwtAuthGuard } from './login/auth/jwt-auth.guard';
import { LocalAuthGuard } from './login/auth/local-auth.guard';
import { AuthService } from './login/auth/auth.service';

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @UseGuards(JwtAuthGuard)
    @Post('deneme')
    deneme(@Body()id:number)
    {
        console.log("sadasasdasd");
        return "dasdasdasd";
    }
}