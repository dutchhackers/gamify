import { GoogleSpreadsheetRow } from './google-spreadsheet-row';
import { Field, ObjectType } from '@nestjs/graphql';

enum FieldMapping {
  GOOGLE = 'Id',
  TWITTER = 'Twitter',
  GITHUB = 'GitHub',
  TEMPO = 'Tempo',
  SLACK = 'Slack',
  STRAVA = 'Strava',
  POKEMON = 'PokemonTrainer',
}

@ObjectType({ description: 'employee account ' })
export class EmployeeAccounts {
  @Field({ nullable: true })
  google!: string;

  @Field({ nullable: true })
  github!: string;

  @Field({ nullable: true })
  twitter!: string;

  @Field({ nullable: true })
  tempo!: string;

  @Field({ nullable: true })
  slack!: string;

  @Field({ nullable: true })
  strava!: string;

  @Field({ nullable: true })
  pokemon!: string;

  static fromRow(data: GoogleSpreadsheetRow) {
    const obj = Object.assign(new EmployeeAccounts(), <Partial<EmployeeAccounts>>{
      google: data[FieldMapping.GOOGLE],
      github: data[FieldMapping.GITHUB],
      twitter: data[FieldMapping.TWITTER],
      tempo: data[FieldMapping.TEMPO],
      slack: data[FieldMapping.SLACK],
      strava: data[FieldMapping.STRAVA],
      pokemon: data[FieldMapping.POKEMON],
    });

    return obj;
  }
}
