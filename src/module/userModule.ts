import { Module } from "@nestjs/common";
import { UserService } from "../service/userService";
import { UserCRUD } from "../prismaCRUD/userCRUD";
import { PrismaService } from "../service/prismaService";
import { UserController } from "../controller/userController";
import { AuthModule } from "./authModule";

@Module({
    imports: [AuthModule],
    providers: [UserService, UserCRUD, PrismaService],
    controllers: [UserController],
    exports: [UserService]
})
export class UserModule { }