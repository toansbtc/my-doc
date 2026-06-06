import { Module } from '@nestjs/common';
import { UserModule } from './module/userModule';
import { CategoryModule } from './module/categoryModule';
import { NoteModule } from './module/noteModule';
import { ConfigModule } from '@nestjs/config';
import { CustomGuard } from './myGuard/customGuard';
import { AuthModule } from './module/authModule';
import { folderController } from './controller/folderController';
import { folderModule } from './module/folderModule';

@Module({
  imports: [UserModule, CategoryModule, NoteModule, AuthModule,folderModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [
    CustomGuard
  ],
})
export class AppModule { }
