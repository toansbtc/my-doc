import { Injectable } from "@nestjs/common";
import { PrismaService } from "../service/prismaService";

@Injectable()
export class FolderCRUD {
    constructor(private prisma: PrismaService) {}

    async create(folderName: string) {
        return this.prisma.folder.create({
            data: {
               folderName
            },
        });
    }


    async getAllCategories() {
        return this.prisma.folder.findMany({
            include: {
                category:true
            }
        });
    }

    async update(folderId: number, folderName: string) {
        return this.prisma.folder.update({
            where: {
                folderId,
            },
            data: {
                folderName,
            },
        });
    }

    async delete(folderId: number) {
        return this.prisma.folder.delete({
            where: {
                folderId,
            },
        });
    }
}