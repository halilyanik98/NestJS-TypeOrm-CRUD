import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, ParseIntPipe, UseGuards, ForbiddenException } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { RolesGuard } from 'src/roles.guard';

@Controller('task')
@UseGuards(RolesGuard)

export class TaskController {
  constructor(private readonly taskService: TaskService) {}

 @Get('exceptions')
    async find(){
    throw new ForbiddenException();
    }

  @Get()
  findAll() {
   return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id' ,ParseIntPipe) id: number) {
    return this.taskService.findOne(id);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
