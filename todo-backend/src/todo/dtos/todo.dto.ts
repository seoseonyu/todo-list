import {
  IsBIC,
  IsBoolean,
  IsDate,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { Todo } from '../entities/todo.entity';

export class TodoDto {
  @Expose({ name: 'id' })
  @IsNumber()
  @IsOptional()
  private readonly _id: number;

  @Expose({ name: 'title' })
  @IsString()
  private readonly _title: string;

  @Expose({ name: 'description' })
  @IsString()
  @Transform((data) => data.value || '-')
  private readonly _description: string;

  @Expose({ name: 'isChecked' })
  @IsBoolean()
  @Transform((data) => data.value || false)
  private readonly _isChecked: boolean;

  @Expose({ name: 'start' })
  @IsDateString()
  @IsOptional()
  private readonly _start: Date | null;

  @Expose({ name: 'end' })
  @IsDateString()
  @IsOptional()
  private readonly _end: Date | null;

  @Expose({ name: 'createdAt' })
  @IsDateString()
  @IsOptional()
  private readonly _createdAt: Date;

  @Expose({ name: 'updatedAt' })
  @IsDateString()
  @IsOptional()
  private readonly _updatedAt: Date;

  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  get description() {
    return this._description;
  }
  get isChecked() {
    return this._isChecked;
  }
  get start() {
    return this._start;
  }
  get end() {
    return this._end;
  }
  get createdAt() {
    return this._createdAt;
  }
  get updatedAt() {
    return this._updatedAt;
  }

  toEntity(): Todo {
    const instance = new Todo();
    instance.title = this._title;
    instance.description = this._description;
    instance.isChecked = this._isChecked;
    instance.start = this._start;
    instance.end = this._end;
    return instance;
  }
}
