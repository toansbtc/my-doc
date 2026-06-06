import { Injectable } from "@nestjs/common";
import { createNoteDTO, updateNoteDTO } from "src/DTO/noteDTO";
import { FolderCRUD } from "src/prismaCRUD/folderCRUD";
@Injectable()
export class folderService {
    constructor(private folder: FolderCRUD) { }

    async createFolder(folderName) {
        return await this.folder.create(folderName);
    }

    
    async getAllCategories() {
        return this.folder.getAllCategories()
    }

    async update(folderId: number, folderName: string) {
        return this.folder.update(folderId,folderName)
    }

    async delete(folderId: number) {
        return this.folder.delete(folderId)
    }
}