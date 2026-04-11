import { Injectable } from "@nestjs/common";
import { createCategoryDTO, updateCategoryDTO } from "src/DTO/categoryDTO";
import { CategoryCRUD } from "src/prismaCRUD/categoryCRUD";

@Injectable()
export class categoryService {
    constructor(private category: CategoryCRUD) { }

    async create(createCategoryDto: createCategoryDTO) {
        return await this.category.create(createCategoryDto.categoryName, createCategoryDto.categoryId);
    }

    async editCategory(editCategoryDto: updateCategoryDTO) {
        return await this.category.update(editCategoryDto.categoryId, editCategoryDto.categoryName);
    }

    async delete(id: string) {
        return await this.category.delete(id);
    }

    async getAllCategories() {
        return await this.category.getAllCategories();
    }

    async getCategory(id: string) {
        return await this.category.getCategory(id);
    }
}