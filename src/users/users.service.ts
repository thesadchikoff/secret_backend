import {HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma";
import {User} from "@prisma/client";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany()
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        email
      }
    })
    if (!user) {
      throw new HttpException("User Not Found", HttpStatus.NOT_FOUND)
    }
    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: {
        id
      }
    })
    if (!user) {
      throw new HttpException("User By ID Not Found", HttpStatus.NOT_FOUND)
    }
    return user
  }

  async create(dto: CreateUserDto): Promise<User> {
    const newUser = await this.prisma.user.create({
      data: {
        firstName: dto.firstName,
        middleName: dto.middleName,
        lastName: dto.lastName,
        email: dto.email,
        password: dto.password
      }
    })
    if (!newUser) {
      throw new HttpException("Error Creation User", HttpStatus.BAD_REQUEST)
    }
    return newUser
  }
}
