import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from 'typeorm';
import { TaskOnly } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(TaskOnly)
    private taskRepository: Repository<TaskOnly>,
  ) {}

  findAll(): Promise<TaskOnly[]> {
    return this.taskRepository.find();
  }

  findOne(id: number): Promise<TaskOnly> {
    return this.taskRepository.findOne(id);
  }
  
  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update(+id,updateTaskDto);
  }

  remove(id: number) {
    return this.taskRepository.delete(id);
  }
}
