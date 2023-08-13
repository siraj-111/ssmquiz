import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Chapter } from './entities';

import { ChaptersService } from './chapters.service';
import { ChaptersController } from './chapters.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Chapter])],
  controllers: [ChaptersController],
  providers: [ChaptersService],
  exports: [ChaptersService],
})
export class ChaptersModule {}
