import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { TodoDto } from '../dtos/todo.dto';

@Controller('/todo')
export class TodoController {
  @Post('/item/add')
  add(@Body() body: TodoDto) {
    return;
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
