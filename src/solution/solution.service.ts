import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

/**
 * Нужен только сервис получения данных, изменения здесь не нужны
 */
@Injectable()
export class SolutionService {

  constructor(private prismaService: PrismaService) {}

  // create(createSolutionInput: CreateSolutionInput) {
  //   return 'This action adds a new solution';
  // }

  findAll() {
    return this.prismaService.serviceSolution.findMany();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} solution`;
  // }

  // update(id: number, updateSolutionInput: UpdateSolutionInput) {
  //   return `This action updates a #${id} solution`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} solution`;
  // }
}
