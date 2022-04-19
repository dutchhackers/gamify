import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { CreateBadgeInput } from './dto/create-badge.input';
import { Response } from 'express';

@Controller('badges')
export class BadgesController {
  constructor(private badgesService: BadgesService) {}

  @Post()
  async create(@Body() createBadgeInput: CreateBadgeInput, @Res() response: Response) {
    

    // TODO validate if authenticated user has access to the given application id
    response.send(await this.badgesService.create(createBadgeInput))
  }

  @Get()
  findAll() {
    return this.badgesService.findMany();
  }

}
