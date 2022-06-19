import { Injectable } from '@nestjs/common';
import { TodoDto } from '../dtos/todo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../entities/todo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  add(body: TodoDto) {
    console.log(body);
    const entity = body.toEntity();

    return this.todoRepository.save(entity);
  }
}
