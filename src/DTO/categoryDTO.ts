import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class createCategoryDTO {
    @IsString()
    @IsNotEmpty()
    categoryName: string;
    @IsNumber()
    @IsNotEmpty()
    folderId: number;
}

export class updateCategoryDTO {
    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
    @IsString()
    @IsNotEmpty()
    categoryName: string;
}

export class deleteCategoryDTO {
    @IsNumber()
    @IsNotEmpty()
    categoryId: string;
}

export class getCategoryDTO {
    @IsNumber()
    @IsNotEmpty()
    categoryId: string;
}
