import { Entity, Column, OneToMany } from 'typeorm';

import { BaseEntity } from '@database/base.entity';
import { Chapter } from '@chapters/entities';

@Entity({ name: 'subjects' })
export class Subject extends BaseEntity {
  @Column()
  title: string;

  @OneToMany(() => Chapter, (chapter) => chapter.subject)
  chapters: Chapter[];
}
