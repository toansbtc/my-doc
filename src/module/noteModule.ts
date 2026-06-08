import { Module } from "@nestjs/common";
import { noteController } from "../controller/noteController";
import { noteCRUD } from "../prismaCRUD/noteCRUD";
import { PrismaService } from "../service/prismaService";
import { noteService } from "../service/noteService";

@Module({
    providers: [noteService, noteCRUD, PrismaService],
    controllers: [noteController]
})
export class NoteModule { }