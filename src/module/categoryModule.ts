import { Module } from "@nestjs/common";
import { CategoryController } from "src/controller/categoryController";
import { CategoryCRUD } from "src/prismaCRUD/categoryCRUD";
import { PrismaService } from "src/service/prismaService";
import { categoryService } from "src/service/categoryService";

@Module({
    providers: [categoryService, CategoryCRUD, PrismaService],
    controllers: [CategoryController],
    exports: [categoryService]
})
export class CategoryModule { }