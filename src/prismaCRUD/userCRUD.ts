import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/service/prismaService";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserCRUD {
    private prisma: PrismaService;
    constructor(prisma: PrismaService) {
        this.prisma = prisma;
    }

    async create(user: string, password: string, role: string) {
        const count = await this.prisma.user.count();
        if (count > 0) {
            return "can't create more than 1 user";
        }
        else
            return await this.prisma.user.create({
                data: {
                    userName: user,
                    password: await bcrypt.hash(password, 10),
                    role,
                },
            });
    }

    async getUser(user: string) {
        return await this.prisma.user.findUnique({
            where: {
                userName: user,
            },
        });
    }

    async update(user: string, password: string, role?: string) {
        return await this.prisma.user.update({
            where: {
                userName: user,
            },
            data: {
                ...(role ? { role } : {}),
                password: password,
            },
        });
    }

}