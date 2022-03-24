import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, Request} from "@nestjs/common";
import {JwtAuthGuard} from "../auth/guard/jwt-auth.guard";
import {TaskService} from "./task.service";
import {CreateTaskDto} from "./dto/create-task.dto";
import {UpdateTaskDto} from "./dto/update-task.dto";

@Controller ('task')

export class TaskController{
    constructor(private taskService:TaskService) {}
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        console.log('FindAll');
        return this.taskService.findAll({ relations: ['user'] });
    }

    @UseGuards(JwtAuthGuard)
    @Get('myTasks')
    find_One(@Request() req) {
        return this.taskService.findOne(req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createTaskDto: CreateTaskDto,@Request() req) {
        return this.taskService.create(createTaskDto,req);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        console.log('Update');
        return this.taskService.update(+id, updateTaskDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        console.log('Delete');
        return this.taskService.remove(+id);
    }
    //-----------------------------------------------------02
}