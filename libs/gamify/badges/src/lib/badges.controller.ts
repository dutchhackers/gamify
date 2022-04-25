import { ApplicationsService } from '@gamify/application';
import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BadgesService } from './badges.service';
import { CreateBadgeInput } from './dto/create-badge.input';
import { UpdateBadgeInput } from './dto/update-badge.input';
import { BadgeModel } from './models';

@Controller('badges')
export class BadgesController {
  constructor(private badgesService: BadgesService, private applicationsService: ApplicationsService) {}

  @Post()
  async create(@Body() createBadgeInput: CreateBadgeInput): Promise<BadgeModel> {
    if (await this.applicationsService.findOne(createBadgeInput.applicationId) === null) {
      throw new BadRequestException('Application not found');
    }

    // TODO check authorization of user.
    return this.badgesService.create(createBadgeInput);
  }

  @Get()
  findAll(): Promise<BadgeModel[]> {
    return this.badgesService.findMany();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<BadgeModel> {
    return this.findBadgeOrFail(id);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateBadgeInput: UpdateBadgeInput): Promise<BadgeModel> {
    // TODO check authorization of user.

    await this.findBadgeOrFail(id);

    return this.badgesService.update(id, updateBadgeInput);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<BadgeModel> {
    // TODO check authorization of user.
  
    await this.findBadgeOrFail(id);

    return this.badgesService.remove(id);
  }

  /**
   * Tries to find a badge in the database by id. When the badge doesn't exist it throws a NotFoundException
   * 
   * @param id The id of the badge.
   * @returns A badge when found in the database.
   */
  private async findBadgeOrFail(id: number) {
    const badge = await this.badgesService.findOne(id);

    if (badge === null) {
      throw new NotFoundException();
    }

    return badge;
  }
}
