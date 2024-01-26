import { Body, Controller, Get, Post} from "@nestjs/common";
import { PlayersService } from "./players.service";

@Controller('players')
export class PlayersController {
    constructor(private readonly playerService:PlayersService) {}

    @Get()
    getPlayers() {
        return this.playerService.getPlayers();
    }

    @Post("/add")
    addNewPlayer(@Body() player: any) {
        return this.playerService.addNewPlayer(player);
    }

    @Post("bulk-add")
    addBulkPlayers(@Body() players: any[]) {
        return this.playerService.addBulkPlayers(players);
    }

}