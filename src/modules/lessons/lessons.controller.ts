import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';

import { AnyFilesInterceptor } from '@nestjs/platform-express';

import { LessonsService } from './lessons.service';
import { FileService } from '@FileHandling/file-upload.service';
import { CreateLessonDto, UpdateLessonDto } from './dto';

@Controller('lessons')
export class LessonsController {
  constructor(
    private readonly lessonsService: LessonsService,
    private readonly fileService: FileService,
  ) {}

  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  async create(
    @Body() createLessonDto: CreateLessonDto,
    @UploadedFiles() uploadedFiles: any,
  ) {
    var files = [];
    // if (uploadedFiles) {
    //   for (const file of uploadedFiles) {
    //     const res = await this.fileService.uploadToS3(
    //       file.buffer,
    //       file.originalname,
    //     );
    //     files.push(res.Location);
    //   }
    // }
    return this.lessonsService.create({
      ...createLessonDto,
      ...(uploadedFiles.length && { files }),
    });
  }

  @Get()
 async findAll() {
    return await this.lessonsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.lessonsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
    return  await this.lessonsService.update(+id, updateLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lessonsService.remove(+id);
  }
}
