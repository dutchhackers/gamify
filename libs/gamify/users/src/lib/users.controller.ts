import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class GamifyUsersController {
  constructor(private gamifyUsersService: UsersService) {}
}
