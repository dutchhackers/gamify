import { OmitType } from "@nestjs/mapped-types";
import { CreateApplicationInput } from "./create-application.input";

export class UpdateApplicationInput extends OmitType(CreateApplicationInput, ['applicationType', 'ownerUserId'] as const) {
    
}