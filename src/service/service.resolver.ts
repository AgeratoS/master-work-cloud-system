import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ServiceService } from './service.service';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';
import { ICloudParams, IMethod } from './adapters/common';

@Resolver('Service')
export class ServiceResolver {
  constructor(private readonly serviceService: ServiceService) { }

  @Mutation('createService')
  create(@Args('createServiceInput') createServiceInput: CreateServiceInput) {
    return this.serviceService.create(createServiceInput);
  }

  @Query('serviceAll')
  findAll() {
    return this.serviceService.findAll();
  }

  @Query('call')
  call(@Args('id') id: number, @Args('params') params: ICloudParams) {
    return this.serviceService.call(id, params);
  }

  @Query('service')
  findOne(@Args('id') id: number) {
    return this.serviceService.findOne(id);
  }

  @Mutation('updateService')
  update(@Args('updateServiceInput') updateServiceInput: UpdateServiceInput) {
    return this.serviceService.update(updateServiceInput.id, updateServiceInput);
  }

  @Mutation('removeService')
  remove(@Args('id') id: number) {
    return this.serviceService.remove(id);
  }

  @Mutation('removeServices')
  removeMany(@Args('ids') ids: number[]) {
    return this.serviceService.removeMany(ids)
  }
}
