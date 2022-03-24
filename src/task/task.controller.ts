import {Controller, Get, UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../auth/guard/jwt-auth.guard";
import {TaskService} from "./task.service";

@Controller ('task')

export class TaskController{
    constructor(private taskService:TaskService) {}
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        console.log('FindAll');
        return this.taskService.findAll({ relations: ['user'] });
    }
}