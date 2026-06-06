import { Module } from "@nestjs/common";
import { PrismaService } from "src/service/prismaService";
import { folderService } from "src/service/folderService";
import { FolderCRUD } from "src/prismaCRUD/folderCRUD";
import { folderController } from "src/controller/folderController";

@Module({
    providers: [folderService,FolderCRUD, PrismaService],
    controllers: [folderController],
    exports: [folderService]
})
export class folderModule { }