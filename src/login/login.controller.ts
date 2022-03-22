import {Controller, Get, Request, Post, UseGuards, Param, Body, ParseIntPipe, Patch, Delete} from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import {CreateTaskDto} from "../task/dto/create-task.dto";
import {UpdateTaskDto} from "../task/dto/update-task.dto";

@Controller('login')
export class LoginController {
    constructor(private authService: AuthService) {}
//---------------------------------------------------------01
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
        console.log('login.controller-Post');
        return this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        console.log('login.controller-profileGet')
        return req.user;
    }
//---------------------------------------------------------01

//---------------------------------------------------------02
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        console.log('FindAll');
        return this.authService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id' ,ParseIntPipe) id: number) {
        console.log('FindAll İD');
        return this.authService.findOne(id);
    }

    // @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        console.log('Create');
        return this.authService.create(createTaskDto);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        console.log('Update');
        return this.authService.update(+id, updateTaskDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        console.log('Delete');
        return this.authService.remove(+id);
    }
    //-----------------------------------------------------02
}