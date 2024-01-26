import { PartialType } from '@nestjs/mapped-types';
import { CreateClassicWarDto } from './create-classic-war.dto';

export class UpdateClassicWarDto extends PartialType(CreateClassicWarDto) {}
