import {Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, Request} from "@nestjs/common";
import {JwtAuthGuard} from "../auth/guard/jwt-auth.guard";
import {TaskService} from "./task.service";
import {CreateTaskDto} from "./dto/create-task.dto";
import {UpdateTaskDto} from "./dto/update-task.dto";

@Controller ('task')

export class TaskController{
    constructor(private taskService:TaskService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createTaskDto: CreateTaskDto,@Request() req) {
        return this.taskService.create(createTaskDto,req);
    }



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
    @Patch()
    update(@Request() req ,@Body() updateTaskDto: UpdateTaskDto) {
        console.log('Update');
        return this.taskService.update(req.user.id, updateTaskDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    remove(@Body() id:number, @Request() req) {
        return this.taskService.remove(id,req.user.id);
    }
    //-----------------------------------------------------02
}