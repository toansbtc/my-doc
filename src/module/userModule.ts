import { Module } from "@nestjs/common";
import { UserService } from "src/service/userService";
import { UserCRUD } from "src/prismaCRUD/userCRUD";
import { PrismaService } from "src/service/prismaService";
import { UserController } from "src/controller/userController";
import { AuthModule } from "./authModule";

@Module({
    imports: [AuthModule],
    providers: [UserService, UserCRUD, PrismaService],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule { }