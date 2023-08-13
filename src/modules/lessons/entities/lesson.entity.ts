import { BaseEntity } from '@database/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Chapter } from '@chapters/entities';

@Entity({ name: 'lessons' })
export class Lesson extends BaseEntity {
  @Column({ nullable: false })
  title: string;
  @Column('text', { array: true, nullable: true })
  files: string[];

  @Column({ nullable: true })
  content: string;

  @Column('jsonb', { nullable: true })
  tableData: [];

  @ManyToOne(() => Chapter, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'chapter' })
  chapter: Chapter;
}
