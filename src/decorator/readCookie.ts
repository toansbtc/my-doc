import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const ReadCookie = createParamDecorator((data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.cookies[data];
});
