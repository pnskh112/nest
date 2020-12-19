import { BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from '../tasks.model';

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE,
    ];
    transform(value: any) {
        value = value.toUpperCase();

        if (!this.isSatusValid(value)){
            throw new BadRequestException(`"${value}" is an invalid status`);
        }

        return value; 
    }

    private isSatusValid(status: any) {
        const idx =  this.allowedStatuses.indexOf(status);
        return idx !== -1;
    }
} 