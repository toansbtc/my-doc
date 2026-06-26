import { Body, Controller, Get, Injectable, Post } from "@nestjs/common";
import { folderService } from "../service/folderService";
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
    async updateFolder(@Body() data) {
        return this.folderService.update(parseInt(data.folderId),data.folderName)
    }

    @Post("/deleteFolder")
    async deleteFolder(@Body() data) {
        return this.folderService.delete(parseInt(data.folderId))
    }
}