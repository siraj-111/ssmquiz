import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateChapterDto, UpdateChapterDto } from './dto';
import { Chapter } from './entities';

@Injectable()
export class ChaptersService {
  constructor(
    @InjectRepository(Chapter) private readonly repository: Repository<Chapter>,
  ) {}
  async create(createChapterDto: CreateChapterDto) {
    return await this.repository.save(createChapterDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.find({
      where: { id },
      relations: { subject: true },
    });
  }

  async update(id: number, updateChapterDto: UpdateChapterDto) {
    const chapter = await this.findOne(id);
    return await this.repository.save({ ...chapter, ...updateChapterDto });
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
