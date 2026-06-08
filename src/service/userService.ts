import { Injectable } from "@nestjs/common";
import { UserCRUD } from "../prismaCRUD/userCRUD";

@Injectable()
export class UserService {
    constructor(private readonly userCRUD: UserCRUD) { }


    findOne(id: string) {
        return this.userCRUD.getUser(id);
    }

    create(createUserDto: any) {
        return this.userCRUD.create(createUserDto.userName, createUserDto.password, createUserDto.role);
    }

    update(createUserDto: any) {
        return this.userCRUD.update(createUserDto.userName, createUserDto.password, createUserDto.role);
    }
}