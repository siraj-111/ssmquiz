import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';

import { ChaptersModule } from '@chapters/chapters.module';
import { SubjectsModule } from '@subjects/subjects.module';
import { LessonsModule } from '@lessons/lessons.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadModule } from '@FileHandling/file-upload.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      // host: process.env.DB_HOST,
      host: 'containers-us-west-125.railway.app',

      // port: Number(process.env.DB_PORT),
      port: 6884,

      // database: process.env.DB_NAME,
      database: 'railway',

      // username: process.env.DB_USER,
      username: 'postgres',

      // password: process.env.DB_PASSWORD,
      password: 'g6rCN7nAcb2WxkU0t4Mo',

      autoLoadEntities: true,
      // logging: ['error'],
      // maxQueryExecutionTime: 1000,
      // ssl: {
      //   rejectUnauthorized: false,
      // },

      synchronize: true,
      ...(process.env.NODE_ENV === 'prod'
        ? {
            ssl: {
              rejectUnauthorized: false,
              // ca: fs.readFileSync('ca-certificate.crt').toString(),
            },
          }
        : {}),
    }),
    ChaptersModule,
    SubjectsModule,
    LessonsModule,
    FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
