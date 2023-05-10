import { Test, TestingModule } from '@nestjs/testing';
import { RootResolver } from './root.resolver';

describe('RootResolver', () => {
  let resolver: RootResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RootResolver],
    }).compile();

    resolver = module.get<RootResolver>(RootResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
