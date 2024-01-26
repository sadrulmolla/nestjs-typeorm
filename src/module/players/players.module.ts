import { Module } from "@nestjs/common";
import { PlayersController } from "./players.controller";
import { PlayersService } from "./players.service";
import { PlayersRepository } from "./repositories/players.repository";
import { Players } from "./entities/players.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Players])],
    controllers: [PlayersController],
    providers: [PlayersService,PlayersRepository],
    exports: [PlayersService],
})

export class PlayersModule {}