import { CanActivate, ExecutionContext, UnauthorizedException, Injectable, ForbiddenException } from "@nestjs/common";
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
            const refreshtoken = request.cookies.refreshToken;

            console.log('this is token ', token, '--', refreshtoken)

            try {
                {
                    if (refreshtoken) {
                        if (token) {
                            const decoded = this.jwtService.verify(token);
                            request.user = decoded;
                            return true;
                        }
                        else
                            {
                                console.log('running token expired')
                                throw new UnauthorizedException('token expired')
                            }
                    }
                    else {
                        console.log('running dont loggin anyway')
                        throw new ForbiddenException('dont login anyway')
                    }
                }
            }
            catch (error) {
                console.log('running getting error')
                return false
            }
        }
        return true;
    }
}