import { OmitType } from "@nestjs/swagger";
import { CreateBadgeInput } from "./create-badge.input";

export class UpdateBadgeInput extends OmitType(CreateBadgeInput, ['applicationId']) {}