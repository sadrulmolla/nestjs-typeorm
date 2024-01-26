import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PlayersRepository } from './repositories/players.repository';
import { Players } from './entities/players.entity';

@Injectable()
export class PlayersService {
  constructor(private readonly playersRepository: PlayersRepository) {}
  async getPlayers() {
    try {
      return await this.playersRepository.getPlayers();
    }catch (err) {
      console.log("Error in fetching details from db",err);
      throw new InternalServerErrorException(err.message);
    }
  }

  async addNewPlayer(player: Players) {
    try {
      return await this.playersRepository.addNewPlayer(player);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async addBulkPlayers(players: any[]) {
    try {
      for (let element of players) {
        const player = {
          name: element[0],
          townHall: element[1],
          builderHall: element[2],
        };
        await this.playersRepository.addNewPlayer(player);
      }
      return { message: 'Players added successfully' };
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
