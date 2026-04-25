import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/service/prismaService";

@Injectable()
export class CategoryCRUD {
    private prisma: PrismaService;
    constructor(prisma: PrismaService) {
        this.prisma = prisma;
    }

    async create(categoryName: string, categoryId: string,folderId:number) {
        return this.prisma.category.create({
            data: {
                categoryId,
                categoryName,
                folderId:folderId
            },
        });
    }

    async getCategory(categoryId: string) {
        return this.prisma.category.findUnique({
            where: {
                categoryId,
            },
            include: {
                notes: true
            }
        });
    }

    async getAllCategories() {
        return this.prisma.category.findMany({
            include: {
                notes: true
            }
        });
    }

    async update(categoryId: string, categoryName: string) {
        return this.prisma.category.update({
            where: {
                categoryId,
            },
            data: {
                categoryName,
            },
        });
    }

    async delete(categoryId: string) {
        return this.prisma.category.delete({
            where: {
                categoryId,
            },
        });
    }
}