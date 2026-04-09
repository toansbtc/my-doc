import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class createNoteDTO {
    @IsString()
    @IsNotEmpty()
    keyWord: string;
    @IsString()
    @IsNotEmpty()
    content: string;
    @IsString()
    @IsNotEmpty()
    categoryId: string;
}

export class updateNoteDTO {
    @IsString()
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
    @IsString()
    @IsNotEmpty()
    id: number;
}