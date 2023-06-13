import { Injectable } from '@nestjs/common';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';
import { PrismaService } from 'src/prisma.service';
import { CloudFactory } from './adapters';
import { ICloudParams } from './adapters/common';

@Injectable()
export class ServiceService {

  constructor(private prisma: PrismaService, private readonly cloudFactory: CloudFactory) { }

  create(createServiceInput: CreateServiceInput) {
    return this.prisma.service.create({
      data: createServiceInput
    })
  }

  async call(id: number, params: ICloudParams): Promise<any> {
    const service = await this.prisma.service.findFirst({
      where: {
        id
      }
    });

    const solution = await this.prisma.serviceSolution.findFirst({
      where: {
        id: service.serviceSolutionId
      }
    });

    const cloudAdapter = this.cloudFactory.getInstance(solution.name);

    const result = await cloudAdapter.call(service, params);

    return result;
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
