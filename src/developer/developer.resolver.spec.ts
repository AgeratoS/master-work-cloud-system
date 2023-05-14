import { Test, TestingModule } from '@nestjs/testing';
import { DeveloperResolver } from './developer.resolver';
import { DeveloperService } from './developer.service';

describe('DeveloperResolver', () => {
  let resolver: DeveloperResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeveloperResolver, DeveloperService],
    }).compile();

    resolver = module.get<DeveloperResolver>(DeveloperResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
