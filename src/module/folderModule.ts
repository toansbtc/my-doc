import { Module } from "@nestjs/common";
import { PrismaService } from "../service/prismaService";
import { folderService } from "../service/folderService";
import { FolderCRUD } from "../prismaCRUD/folderCRUD";
import { folderController } from "../controller/folderController";

@Module({
    providers: [folderService,FolderCRUD, PrismaService],
    controllers: [folderController],
    exports: [folderService]
})
export class folderModule { }