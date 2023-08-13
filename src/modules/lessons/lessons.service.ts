import { Injectable } from '@nestjs/common';
import { CreateLessonDto, UpdateLessonDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Lesson } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson) private readonly repository: Repository<Lesson>,
  ) {}
  async create(createLessonDto: CreateLessonDto) {
    return await this.repository.save(createLessonDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  findOne(id: number) {
    return this.repository.find({ where: { id } });
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    const lesson = await this.repository.findOne({ where: { id } });
    return await this.repository.save({ ...updateLessonDto, ...lesson });
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
