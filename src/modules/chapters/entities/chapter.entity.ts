import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { BaseEntity } from '@database/base.entity';
import { Subject } from '@subjects/entities';

@Entity({ name: 'chapters' })
export class Chapter extends BaseEntity {
  @Column()
  title: string;

  @ManyToOne(() => Subject, (subject) => subject.chapters)
  @JoinColumn()
  subject: Subject;
}
