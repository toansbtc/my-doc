import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { Private } from "../decorator/role";
import { categoryService } from "../service/categoryService";
import { Body } from "@nestjs/common";
import { createCategoryDTO, updateCategoryDTO, deleteCategoryDTO, getCategoryDTO } from "../DTO/categoryDTO";

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: categoryService) { }

    @Private()
    @Post("/create")
    async create(@Body() createCategoryDto) {
        console.log("data category "+createCategoryDto)
        return await this.categoryService.create(createCategoryDto);
    }

    @Private()
    @Put("/editName")
    async editCategory(@Body() editCategoryDto: updateCategoryDTO) {
        return await this.categoryService.editCategory(editCategoryDto);
    }

    @Private()
    @Delete("/delete")
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