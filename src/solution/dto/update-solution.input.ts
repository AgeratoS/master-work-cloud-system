import { CreateSolutionInput } from './create-solution.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSolutionInput extends PartialType(CreateSolutionInput) {
  id: number;
}
