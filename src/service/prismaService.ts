import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";
import { Pool } from "pg";


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        const pool = new Pool({ connectionString: process.env.DATABASE_URL! });
        const adapter = new PrismaPg(pool) as any;

        super({
            adapter,
        });
    }
    async onModuleInit() {
        console.log("Conected to database");
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}