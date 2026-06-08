import { Module } from "@nestjs/common";
import { CategoryController } from "../controller/categoryController";
import { CategoryCRUD } from "../prismaCRUD/categoryCRUD";
import { PrismaService } from "../service/prismaService";
import { categoryService } from "../service/categoryService";

@Module({
    providers: [categoryService, CategoryCRUD, PrismaService],
    controllers: [CategoryController],
    exports: [categoryService]
})
export class CategoryModule { }