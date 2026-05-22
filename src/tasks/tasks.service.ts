import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findOne(id: string): Task {
    const task = this.tasks.find((task) => task.id === id);

    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return task;
  }

  create(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      id: randomUUID(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      status: createTaskDto.status ?? TaskStatus.TODO,
      createdAt: new Date(),
    };

    this.tasks.push(task);

    return task;
  }

  update(id: string, updateTaskDto: UpdateTaskDto): Task {
    const task = this.findOne(id);

    Object.assign(task, updateTaskDto);

    return task;
  }

  remove(id: string): { message: string } {
    const task = this.findOne(id);

    this.tasks = this.tasks.filter((item) => item.id !== task.id);

    return {
      message: 'Task deleted successfully',
    };
  }
}