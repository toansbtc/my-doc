import { SetMetadata } from "@nestjs/common";

export const Private_Key = "private"
export const Private = () => SetMetadata(Private_Key, true);