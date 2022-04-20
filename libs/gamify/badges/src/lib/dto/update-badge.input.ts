import { OmitType } from "@nestjs/mapped-types";
import { CreateBadgeInput } from "./create-badge.input";

export class UpdateBadgeInput extends OmitType(CreateBadgeInput, ['applicationId']) {}