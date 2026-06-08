import { Injectable } from "@nestjs/common";
import { createCategoryDTO, updateCategoryDTO } from "../DTO/categoryDTO";
import { CategoryCRUD } from "../prismaCRUD/categoryCRUD";

@Injectable()
export class categoryService {
    constructor(private category: CategoryCRUD) { }

    async create(createCategoryDto: createCategoryDTO) {
        return await this.category.create(createCategoryDto.categoryName, createCategoryDto.folderId);
    }

    async editCategory(editCategoryDto: updateCategoryDTO) {
        return await this.category.update(editCategoryDto.categoryId, editCategoryDto.categoryName);
    }

    async delete(id) {
        return await this.category.delete(id);
    }

    async getAllCategories() {
        return await this.category.getAllCategories();
    }

    async getCategory(id) {
        return await this.category.getCategory(id);
    }
}