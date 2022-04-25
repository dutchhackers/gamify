import { Roles } from '@gamify/auth';
import { BadgesService } from '@gamify/badge';
import { Role } from '@gamify/core';
import { Controller, forwardRef, Inject, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService, 
    private readonly badgeService: BadgesService
  ) {}

  @Post('/:id/badges/:badgeId')
  @Roles(Role.ADMIN, Role.MODERATOR)
  giveBadge(@Param('id', ParseIntPipe) id: number, @Param('badgeId', ParseIntPipe) badgeId: number) {
    // Check if the user is in the game that the badge is for
    // Check if the badge is repeatable obtainable



    console.log(id, badgeId);

    return 'badge given';
  }
}
