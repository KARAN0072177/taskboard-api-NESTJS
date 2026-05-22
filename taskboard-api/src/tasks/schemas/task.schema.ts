import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TaskStatus } from '../task-status.enum';

export type TaskDocument = HydratedDocument<Task>;

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    required: true,
    trim: true,
    minlength: 3,
  })
  title!: string;

  @Prop({
    trim: true,
  })
  description?: string;

  @Prop({
    enum: TaskStatus,
    default: TaskStatus.TODO,
  })
  status!: TaskStatus;
}

export const TaskSchema = SchemaFactory.createForClass(Task);