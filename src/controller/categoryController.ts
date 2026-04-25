import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { Private } from "src/decorator/role";
import { categoryService } from "src/service/categoryService";
import { Body } from "@nestjs/common";
import { createCategoryDTO, updateCategoryDTO, deleteCategoryDTO, getCategoryDTO } from "src/DTO/categoryDTO";

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: categoryService) { }

    @Private()
    @Post()
    async create(@Body() createCategoryDto: createCategoryDTO) {
        return await this.categoryService.create(createCategoryDto);
    }

    @Private()
    @Put()
    async editCategory(@Body() editCategoryDto: updateCategoryDTO) {
        return await this.categoryService.editCategory(editCategoryDto);
    }

    @Private()
    @Delete()
    async delete(@Body() deleteCategoryDto: deleteCategoryDTO) {
        return await this.categoryService.delete(deleteCategoryDto.categoryId);
    }

    @Get("get-all")
    async getAll() {
        return await this.categoryService.getAllCategories();
    }

    @Post("get-by-category-id")
    async get(@Body() getCategoryDto: getCategoryDTO) {
        return await this.categoryService.getCategory(getCategoryDto.categoryId);
    }
}