import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SolutionService } from './solution.service';
import { CreateSolutionInput } from './dto/create-solution.input';
import { UpdateSolutionInput } from './dto/update-solution.input';

@Resolver('Solution')
export class SolutionResolver {
  constructor(private readonly solutionService: SolutionService) { }

  // @Mutation('createSolution')
  // create(@Args('createSolutionInput') createSolutionInput: CreateSolutionInput) {
  //   return this.solutionService.create(createSolutionInput);
  // }

  @Query('solutions')
  findAll() {
    return this.solutionService.findAll();
  }

  // @Query('solution')
  // findOne(@Args('id') id: number) {
  //   return this.solutionService.findOne(id);
  // }

  // @Mutation('updateSolution')
  // update(@Args('updateSolutionInput') updateSolutionInput: UpdateSolutionInput) {
  //   return this.solutionService.update(updateSolutionInput.id, updateSolutionInput);
  // }

  // @Mutation('removeSolution')
  // remove(@Args('id') id: number) {
  //   return this.solutionService.remove(id);
  // }
}
