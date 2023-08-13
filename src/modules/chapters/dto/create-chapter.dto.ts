import { IsOptional, IsNotEmpty, IsString } from 'class-validator';

import { Subject } from '@subjects/entities';

export class CreateChapterDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  subject: Subject;
}
