import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Private_Key } from "src/decorator/role";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class CustomGuard implements CanActivate {
    constructor(private reflector: Reflector,
        private readonly jwtService: JwtService
    ) { }
    canActivate(context: ExecutionContext): boolean {
        const isPrivate = this.reflector.getAllAndOverride<boolean>(Private_Key, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPrivate) {
            const request = context.switchToHttp().getRequest();
            const token = request.cookies.token;
            if (token) {
                try {
                    const decoded = this.jwtService.verify(token);
                    request.user = decoded;
                    return true;
                } catch (error) {
                    return false;
                }
            }
            return false;
        }
        return true;
    }
}