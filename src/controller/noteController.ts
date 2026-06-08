import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Private } from "../decorator/role";
import { noteService } from "../service/noteService";
import { Body } from "@nestjs/common";
import { createNoteDTO, deleteNoteDTO, updateNoteDTO } from "../DTO/noteDTO";

@Controller('note')
export class noteController {
    constructor(private readonly noteService: noteService) { }

    @Private()
    @Post()
    async create(@Body() createNoteDto: createNoteDTO) {
        console.log(createNoteDTO);
        
        return await this.noteService.create(createNoteDto);
    }

    @Get()
    async getAllNote() {
        return await this.noteService.getAllNote()
     }

    @Private()
    @Put()
    async editNote(@Body() editNoteDto: updateNoteDTO) {
        return await this.noteService.editNote(editNoteDto);
    }

    @Private()
    @Delete(":id")
    async delete(@Param("id",ParseIntPipe) idNote) {
        return await this.noteService.delete(idNote);
    }
}