import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TodoDto } from '../dtos/todo.dto';
import { TodoService } from '../services/todo.service';

@Controller('/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('/item/add')
  add(@Body() body: TodoDto) {
    return this.todoService.add(body);
  }

  @Get('/item/list')
  list() {
    return;
  }

  @Get('/item/:id')
  one() {
    return;
  }

  @Put('/item/:id')
  update() {
    return;
  }

  @Delete('/item/:id')
  delete() {
    return;
  }
}
