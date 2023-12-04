import {Controller, Get} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ApiTags} from "@nestjs/swagger";

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get("/")
  async findAll() {
    return this.usersService.findAll()
  }
}
