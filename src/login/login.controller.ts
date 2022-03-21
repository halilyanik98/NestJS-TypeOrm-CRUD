import {Controller, Get, Request, Post, UseGuards, Param, Body, ParseIntPipe, Patch, Delete} from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import {TaskService} from "../task/task.service";
import {CreateTaskDto} from "../task/dto/create-task.dto";
import {UpdateTaskDto} from "../task/dto/update-task.dto";

@Controller('login')
export class LoginController {
    constructor(private authService: AuthService,
                private readonly taskService: TaskService) {}
//---------------------------------------------------------01
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
//---------------------------------------------------------01

//---------------------------------------------------------02
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.authService.findAll();
        console.log('Buradayız');
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id' ,ParseIntPipe) id: number) {
        return this.authService.findOne(id);
    }

    // @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createTaskDto: CreateTaskDto) {
        return this.authService.create(createTaskDto);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        return this.authService.update(+id, updateTaskDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.authService.remove(+id);
    }
    //-----------------------------------------------------02
}