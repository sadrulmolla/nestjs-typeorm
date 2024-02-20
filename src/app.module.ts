import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from '@nestjs/config';
import { ClassicWarModule } from './module/classic-war/classic-war.module';
import { PlayersModule } from './module/players/players.module';
import { getEntities } from './config/typeorm/entities-list';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRESQL_DB_HOST,
      port: +process.env.POSTGRESQL_DB_PORT,
      username: process.env.POSTGRESQL_DB_USERNAME,
      password: process.env.POSTGRESQL_DB_PASSWORD,
      database: process.env.POSTGRESQL_DB_NAME,
      entities: getEntities(),
      synchronize: true,
    }),
    ClassicWarModule,
    PlayersModule,
  ],
})
export class AppModule { }
