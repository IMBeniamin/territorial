import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { TerritoriesModule } from './territories/territories.module';
import { AssignmentsModule } from './assignments/assignments.module';
import { PositionsModule } from './positions/positions.module';
import { TilesModule } from './tiles/tiles.module';
import { PresenceGateway } from './presence/presence.gateway';

@Module({
  imports: [DbModule, TerritoriesModule, AssignmentsModule, PositionsModule, TilesModule],
  controllers: [AppController],
  providers: [AppService, PresenceGateway],
})
export class AppModule {}
