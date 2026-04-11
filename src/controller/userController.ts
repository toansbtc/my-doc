import { Controller, Get, Post, Body, Param, Delete, Put, Res, Req } from "@nestjs/common";
import { createUserDTO, LoginDTO, updateUserDTO } from "src/DTO/userDTO";
import { UserService } from "src/service/userService";
import { JwtService } from "@nestjs/jwt";
import *  as bcrypt from "bcrypt";
import express from "express";
import { ReadCookie } from "src/decorator/readCookie";
import { Private } from "src/decorator/role";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }


    @Put("/create")
    async create(@Body() createUserDto: createUserDTO) {
        return await this.userService.create(createUserDto);
    }

    @Post('/login')
    async findOne(@Body() loginDTO: LoginDTO, @Res({ passthrough: true }) res: express.Response) {

        const userInfo = await this.userService.findOne(loginDTO.userName);
        if (userInfo) {
            if (await bcrypt.compare(loginDTO.password, userInfo.password)) {
                const payload = { userName: userInfo.userName, role: userInfo.role };
                res.cookie('token', this.jwtService.sign(payload), {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'strict',
                    maxAge: 1000 * 60 * 15
                });
                res.cookie('refreshToken', this.jwtService.sign(payload, { expiresIn: '7d', secret: process.env.REFRESH_TOKEN_SECRET }), {
                    httpOnly: true,
                    secure: true,
                    sameSite: 'strict',
                    maxAge: 1000 * 60 * 60 * 24 * 7
                });
                return "Login success";
            } else {
                return "Login failed";
            }
        } else {
            return "Login failed";
        }
    }

    @Private()
    @Put()
    async update(@Body() updateUserDto: updateUserDTO) {
        return await this.userService.update(updateUserDto);
    }

    @Post('/get-token')
    async refresh(@ReadCookie('refreshToken') refreshToken: string, @Res({ passthrough: true }) res: express.Response) {
        try {
            const decoded = this.jwtService.verify(refreshToken, { secret: process.env.REFRESH_TOKEN_SECRET });
            const payload = { userName: decoded.userName, role: decoded.role };
            res.cookie('token', this.jwtService.sign(payload), {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 1000 * 60 * 15
            });
            return "Refresh token success";
        } catch (error) {
            return "Refresh token failed: " + error.message;
        }
    }
}