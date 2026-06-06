import { Injectable } from "@nestjs/common";
import { createNoteDTO, updateNoteDTO } from "src/DTO/noteDTO";
import { noteCRUD } from "src/prismaCRUD/noteCRUD";
@Injectable()
export class noteService {
    constructor(private note: noteCRUD) { }

    async create(createNoteDto: createNoteDTO) {
        return await this.note.create(createNoteDto.keyWord, createNoteDto.content, createNoteDto.categoryId);
    }

    async getAllNote() {
       return await this.note.getAllNote()
    }

    async editNote(editNoteDto: updateNoteDTO) {
        return await this.note.editNote(editNoteDto.id, editNoteDto.keyWord, editNoteDto.content);
    }

    async delete(id: number) {
        return await this.note.delete(id);
    }
}