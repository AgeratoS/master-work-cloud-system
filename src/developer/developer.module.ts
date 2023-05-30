import { Module } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { DeveloperResolver } from './developer.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [DeveloperResolver, DeveloperService, PrismaService]
})
export class DeveloperModule { }
