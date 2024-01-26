import { Injectable } from '@nestjs/common';
import { CreateClassicWarDto } from './dto/create-classic-war.dto';
import { UpdateClassicWarDto } from './dto/update-classic-war.dto';

@Injectable()
export class ClassicWarService {
  create(createClassicWarDto: CreateClassicWarDto) {
    return 'This action adds a new classicWar';
  }

  findAll() {
    return `This action returns all classicWar`;
  }

  findOne(id: number) {
    return `This action returns a #${id} classicWar`;
  }

  update(id: number, updateClassicWarDto: UpdateClassicWarDto) {
    return `This action updates a #${id} classicWar`;
  }

  remove(id: number) {
    return `This action removes a #${id} classicWar`;
  }
}
