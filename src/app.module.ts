import { Module } from '@nestjs/common';
import { PrismaService } from './service/prismaService';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
