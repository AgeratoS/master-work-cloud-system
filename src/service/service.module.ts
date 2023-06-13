import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';
import { ServiceResolver } from './service.resolver';
import { PrismaService } from 'src/prisma.service';
import { CloudFactory } from './adapters';

@Module({
  providers: [ServiceResolver, ServiceService, PrismaService, CloudFactory],
  exports: [ServiceResolver]
})
export class ServiceModule { }
