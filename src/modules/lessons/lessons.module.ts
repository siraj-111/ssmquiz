import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { Lesson } from './entities';
import { FileUploadModule } from '@FileHandling/file-upload.module';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson]), FileUploadModule],
  controllers: [LessonsController],
  providers: [LessonsService],
  exports: [LessonsService],
})
export class LessonsModule {}
