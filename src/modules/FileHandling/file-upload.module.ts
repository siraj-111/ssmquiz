import { Module } from '@nestjs/common';
import { FileService } from './file-upload.service';

@Module({
  providers: [FileService],
  exports: [FileService],
})
export class FileUploadModule {}
