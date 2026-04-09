import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class createUserDTO {
    @IsString()
    @IsNotEmpty()
    userName: string;
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsString()
    @IsNotEmpty()
    role: string;
}

export class LoginDTO {
    @IsString()
    @IsNotEmpty()
    userName: string;
    @IsString()
    @IsNotEmpty()
    password: string;
}

export class updateUserDTO {
    @IsString()
    @IsNotEmpty()
    userName: string;
    @IsString()
    @IsNotEmpty()
    password: string;
    @IsString()
    @IsOptional()
    role: string;
}