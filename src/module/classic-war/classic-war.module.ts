import { Module } from '@nestjs/common';
import { ClassicWarService } from './classic-war.service';
import { ClassicWarController } from './classic-war.controller';

@Module({
  controllers: [ClassicWarController],
  providers: [ClassicWarService],
})
export class ClassicWarModule {}
