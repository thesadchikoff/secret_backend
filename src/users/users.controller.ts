import {Body, Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import {ApiTags} from "@nestjs/swagger";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("/create")
  async create(@Body() dto: CreateUserDto) {
    return this.usersService.create(dto)
  }

  @Get("/")
  async findAll() {
    return this.usersService.findAll()
  }

  @Post('/find')
  async findByEmail(@Body() email: string) {
    return this.usersService.findByEmail(email)
  }
}
