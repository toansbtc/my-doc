import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/service/prismaService";

@Injectable()
export class noteCRUD {
    private prisma: PrismaService;
    constructor(prisma: PrismaService) {
        this.prisma = prisma;
    }

    async create(keyWord: string, content: string, categoryId: string) {
        return this.prisma.note.create({
            data: {
                keyWord,
                content,
                categoryId,
            },
        });
    }

    async editNote(id: number, keyWord: string, content: string) {
        return this.prisma.note.update({
            where: {
                id,
            },
            data: {
                keyWord,
                content,
            },
        });
    }

    async delete(id: number) {
        return this.prisma.note.delete({
            where: {
                id,
            },
        });
    }
}