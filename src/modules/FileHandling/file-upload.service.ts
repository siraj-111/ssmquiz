import { Injectable } from '@nestjs/common';

// import { S3 } from 'aws-sdk';

@Injectable()
export class FileService {
  // s3 = new S3();

  async uploadToS3(buffer: Buffer, filename: string) {
    // return await this.s3
    //   .upload({
    //     Bucket: process.env.AWS_S3_BUCKET_NAME,
    //     Body: buffer,
    //     Key: new Date().getMilliseconds() + filename,
    //   })
    //   .promise();
  }

  async remove(key: string) {
    // return await this.s3
    //   .deleteObject({
    //     Bucket: process.env.AWS_S3_BUCKET_NAME,
    //     Key: key,
    //   })
    //   .promise();
  }
}
