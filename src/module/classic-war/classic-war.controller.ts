import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClassicWarService } from './classic-war.service';
import { CreateClassicWarDto } from './dto/create-classic-war.dto';
import { UpdateClassicWarDto } from './dto/update-classic-war.dto';

@Controller('classic-war')
export class ClassicWarController {
  constructor(private readonly classicWarService: ClassicWarService) {}

  @Post()
  create(@Body() createClassicWarDto: CreateClassicWarDto) {
    return this.classicWarService.create(createClassicWarDto);
  }

  @Get()
  findAll() {
    return this.classicWarService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.classicWarService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClassicWarDto: UpdateClassicWarDto) {
    return this.classicWarService.update(+id, updateClassicWarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.classicWarService.remove(+id);
  }
}
