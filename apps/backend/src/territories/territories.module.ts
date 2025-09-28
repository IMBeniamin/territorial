import { Module } from '@nestjs/common';
import { TerritoriesService } from './territories.service';

@Module({
  providers: [TerritoriesService]
})
export class TerritoriesModule {}
