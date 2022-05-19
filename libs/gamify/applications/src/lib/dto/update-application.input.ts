import { OmitType } from "@nestjs/swagger";
import { CreateApplicationInput } from "./create-application.input";

export class UpdateApplicationInput extends OmitType(CreateApplicationInput, ['applicationType', 'ownerUserId'] as const) {
    
}