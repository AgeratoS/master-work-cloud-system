import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RootResolver {
    @Query(() => String)
    getName(): string {
        return 'Hello';
    }

    @Query(() => Number)
    getNumber(): number {
        return Math.random();
    }
}
