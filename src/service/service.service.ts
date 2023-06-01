import { Injectable } from '@nestjs/common';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ServiceService {

  constructor(private prisma: PrismaService) { }

  create(createServiceInput: CreateServiceInput) {
    return this.prisma.service.create({
      data: createServiceInput
    })
  }

  findAll() {
    return this.prisma.service.findMany();
  }

  findOne(id: number) {
    return this.prisma.service.findFirst({
      where: {
        id
      }
    })
  }

  update(id: number, updateServiceInput: UpdateServiceInput) {
    return this.prisma.service.update({
      where: {
        id
      },
      data: updateServiceInput
    })
  }

  remove(id: number) {
    return this.prisma.service.delete({
      where: {
        id
      }
    })
  }
}
