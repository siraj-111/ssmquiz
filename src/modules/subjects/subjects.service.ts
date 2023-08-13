import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateSubjectDto, UpdateSubjectDto } from './dto';

import { Subject } from './entities';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectRepository(Subject) private readonly repository: Repository<Subject>,
  ) {}
  async create(createSubjectDto: CreateSubjectDto) {
    return await this.repository.save(createSubjectDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: number, updateSubjectDto: UpdateSubjectDto) {
    const subject = await this.repository.findOne({ where: { id } });
    return await this.repository.save({ ...subject, ...updateSubjectDto });
  }

  async remove(id: number) {
    return await this.repository.delete(id);
  }
}
