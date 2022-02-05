import { EmployeeRole } from '@crm/dto';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class EmployeesArgs {
  @Field(() => Boolean, { nullable: true })
  active?;

  @Field(() => EmployeeRole, { nullable: true })
  role?;

  @Field(() => String, { nullable: true })
  tag?;

  @Field(() => String, { nullable: true })
  githubAccount?;
}
