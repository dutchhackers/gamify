import { JiraProjectStatus } from '@crm/dto';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class ProjectsArgs {
  @Field(() => JiraProjectStatus, { nullable: true, name: 'jiraProjectStatus' })
  jiraProjectStatus?: JiraProjectStatus;

  @Field(() => String, { nullable: true })
  jiraKey?: string;
}
