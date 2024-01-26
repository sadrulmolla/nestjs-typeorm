import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
import { ClassicWarModule } from './module/classic-war/classic-war.module';
import { PlayersModule } from './module/players/players.module';
import { getEntities } from './config/typeorm/entities-list';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'sadrulmolla',
      password: '',
      database: 'coc',
      entities: getEntities(),
      synchronize: true,
    }),
    ClassicWarModule,
    PlayersModule,
  ],
})
export class AppModule {}
