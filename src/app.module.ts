import { Module } from '@nestjs/common';
import { UserController } from './controller/userController';
import { UserModule } from './module/userModule';
import { CategoryModule } from './module/categoryModule';
import { NoteModule } from './module/noteModule';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { CustomGuard } from './myGuard/customGuard';

@Module({
  imports: [UserModule, CategoryModule, NoteModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '15m' },
    }),
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
