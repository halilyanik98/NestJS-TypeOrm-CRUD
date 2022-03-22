import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskOnly } from './entities/task.entity';


@Module({
  imports: [TypeOrmModule.forFeature([TaskOnly])],
  controllers: [TaskController],
  providers: [TaskService],
  exports :[TypeOrmModule],
})
export class TaskModule {
  
}
