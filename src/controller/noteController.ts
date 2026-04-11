import { Controller, Delete, Post, Put } from "@nestjs/common";
import { Private } from "src/decorator/role";
import { noteService } from "src/service/noteService";
import { Body } from "@nestjs/common";
import { createNoteDTO, deleteNoteDTO, updateNoteDTO } from "src/DTO/noteDTO";

@Controller('note')
export class noteController {
    constructor(private readonly noteService: noteService) { }

    @Private()
    @Post()
    async create(@Body() createNoteDto: createNoteDTO) {
        return await this.noteService.create(createNoteDto);
    }

    @Private()
    @Put()
    async editNote(@Body() editNoteDto: updateNoteDTO) {
        return await this.noteService.editNote(editNoteDto);
    }

    @Private()
    @Delete()
    async delete(@Body() deleteNoteDto: deleteNoteDTO) {
        return await this.noteService.delete(deleteNoteDto.id);
    }
}