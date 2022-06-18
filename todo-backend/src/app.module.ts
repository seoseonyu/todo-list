import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { getPostgresqlConnection } from './database/config/postgresql-connection.config';

@Module({
  imports: [getPostgresqlConnection(), TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
