import { PrismaService } from "src/service/prismaService";

export class UserCRUD {
    private prisma: PrismaService;
    constructor(prisma: PrismaService) {
        this.prisma = prisma;
    }

    async create(user: string, password: string, role: string) {
        return this.prisma.user.create({
            data: {
                userName: user,
                password,
                role,
            },
        });
    }

    async getUser(user: string) {
        return this.prisma.user.findUnique({
            where: {
                userName: user,
            },
        });
    }

    async update(user: string, password: string, role?: string) {
        return this.prisma.user.update({
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