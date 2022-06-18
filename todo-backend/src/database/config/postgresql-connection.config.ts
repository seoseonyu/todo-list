import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../../todo/entities/todo.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DB } from '../constants/db.constants';

export function getPostgresqlConnection() {
  return TypeOrmModule.forRootAsync({
    imports: [ConfigModule.forRoot()],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      type: 'postgres',
      host: config.get(DB.HOST),
      port: config.get(DB.PORT),
      username: config.get(DB.USERNAME),
      password: config.get(DB.PASSWORD),
      database: config.get(DB.DATABASE),
      entities: [Todo],
      synchronize: true,
    }),
  });
}
