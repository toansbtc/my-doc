import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class createCategoryDTO {
    @IsString()
    @IsNotEmpty()
    categoryName: string;
    @IsString()
    @IsNotEmpty()
    categoryId: string;
}

export class updateCategoryDTO {
    @IsString()
    @IsNotEmpty()
    categoryId: string;
    @IsString()
    @IsNotEmpty()
    categoryName: string;
}

export class deleteCategoryDTO {
    @IsString()
    @IsNotEmpty()
    categoryId: string;
}
