import { IsNotEmpty, IsOptional } from 'class-validator';

import { Chapter } from '@chapters/entities';

export class CreateLessonDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  files: string[];

  @IsOptional()
  content: string;

  @IsOptional()
  tableData: [];

  @IsOptional()
  chapter: Chapter;
}
