import { Module } from "@nestjs/common";
import { noteController } from "src/controller/noteController";
import { noteCRUD } from "src/prismaCRUD/noteCRUD";
import { PrismaService } from "src/service/prismaService";
import { noteService } from "src/service/noteService";

@Module({
    providers: [noteService, noteCRUD, PrismaService],
    controllers: [noteController]
})
export class NoteModule { }