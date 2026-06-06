import { Body, Controller, Get, Injectable, Post } from "@nestjs/common";
import { folderService } from "src/service/folderService";
@Controller("folder")
export class folderController {
    constructor(private folderService: folderService) { }

    @Post("/createFolder")
    async createFolder(@Body() data) {

        
        return await this.folderService.createFolder(data.folderName);
    }

    @Get("/getAllCategories")
    async getAllCategories() {
        return this.folderService.getAllCategories()
    }

    @Post("/updateFolder")
    async updateFolder(folderId: number, folderName: string) {
        return this.folderService.update(folderId,folderName)
    }

    @Post("/deleteFolder")
    async deleteFolder(folderId: number) {
        return this.folderService.delete(folderId)
    }
}