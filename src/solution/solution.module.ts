import { Module } from '@nestjs/common';
import { SolutionService } from './solution.service';
import { SolutionResolver } from './solution.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [SolutionResolver, SolutionService, PrismaService]
})
export class SolutionModule { }
