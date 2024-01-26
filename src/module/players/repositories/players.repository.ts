import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Players } from '../entities/players.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayersRepository {
  constructor(
    @InjectRepository(Players) private readonly repository: Repository<Players>,
  ) {}

  async getPlayersByName(name: string): Promise<Players> {
    return await this.repository.findOne({ where: { name } });
  }

  async getPlayers(): Promise<Players[]> {
    return await this.repository.find();
  }

  async addNewPlayer(player: Partial<Players>): Promise<Players> {
    return await this.repository.save(player);
  }
}
