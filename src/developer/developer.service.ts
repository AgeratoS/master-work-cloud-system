import { Injectable } from '@nestjs/common';
import { CreateDeveloperInput } from './dto/create-developer.input';
import { UpdateDeveloperInput } from './dto/update-developer.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DeveloperService {
  constructor(private prisma: PrismaService) { }

  create(createDeveloperInput: CreateDeveloperInput) {
    return this.prisma.developer.create({
      data: createDeveloperInput
    })
  }

  findAll() {
    return this.prisma.developer.findMany();
  }

  findOne(id: number) {
    return this.prisma.developer.findFirst({
      where: {
        id
      }
    })
  }

  findByLoginPassword(login: string, password: string) {
    return this.prisma.developer.findFirst({
      where: {
        login,
        password
      }
    })
  }

  update(id: number, updateDeveloperInput: UpdateDeveloperInput) {
    return this.prisma.developer.update({
      where: {
        id
      },
      data: updateDeveloperInput
    })
  }

  remove(id: number) {
    return this.prisma.developer.delete({
      where: {
        id
      }
    })
  }
}
