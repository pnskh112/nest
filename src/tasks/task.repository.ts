import { Entity, EntityRepository, Repository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { NotFoundException, Delete } from '@nestjs/common';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const { title,description } = createTaskDto;
        const task = new Task();
        task.title = title;
        task.description = description;
        task.status = TaskStatus.OPEN;
        await task.save();

        return task;
    }

    deleteTask(id: number): void {
        const task = new Task();
        const found = this.findOne(id);
        if(!found) {
            throw new NotFoundException(`Task with ID "${id}" not found`);
        }
        // found.delete();
        // return this.taskRepository.deleteTask(id);
        // return found;
    }
}

