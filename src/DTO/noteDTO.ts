import { IsString, IsNotEmpty, IsOptional, IsNumber } from "class-validator";

export class createNoteDTO {
    @IsString()
    @IsNotEmpty()
    keyWord: string;
    @IsString()
    @IsNotEmpty()
    content: string;
    @IsNumber()
    @IsNotEmpty()
    categoryId: number;
}

export class updateNoteDTO {
    @IsNumber()
    @IsNotEmpty()
    id: number;
    @IsString()
    @IsNotEmpty()
    keyWord: string;
    @IsString()
    @IsNotEmpty()
    content: string;
}

export class deleteNoteDTO {
    @IsNumber()
    @IsNotEmpty()
    id: number;
}