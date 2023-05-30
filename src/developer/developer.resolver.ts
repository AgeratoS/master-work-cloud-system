import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { DeveloperService } from './developer.service';
import { CreateDeveloperInput } from './dto/create-developer.input';
import { UpdateDeveloperInput } from './dto/update-developer.input';

@Resolver('Developer')
export class DeveloperResolver {
  constructor(private readonly developerService: DeveloperService) {}

  @Mutation('createDeveloper')
  create(@Args('createDeveloperInput') createDeveloperInput: CreateDeveloperInput) {
    return this.developerService.create(createDeveloperInput);
  }

  @Query('developersAll')
  findAll() {
    return this.developerService.findAll();
  }

  @Query('developer')
  findOne(@Args('id') id: number) {
    return this.developerService.findOne(id);
  }

  @Query('verifyDeveloper')
  verifyDeveloper(@Args('login') login: string, @Args('password') password: string) {
    return this.developerService.findByLoginPassword(login, password);
  }

  @Mutation('updateDeveloper')
  update(@Args('updateDeveloperInput') updateDeveloperInput: UpdateDeveloperInput) {
    return this.developerService.update(updateDeveloperInput.id, updateDeveloperInput);
  }

  @Mutation('removeDeveloper')
  remove(@Args('id') id: number) {
    return this.developerService.remove(id);
  }
}
