import { Module } from '@nestjs/common';
import { GraphQLISODateTime, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DeveloperModule } from './developer/developer.module';
import { ServiceModule } from './service/service.module';
import { AuthModule } from './auth/auth.module';
import { GraphQLJSONObject } from 'graphql-type-json';
import { SolutionModule } from './solution/solution.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      resolvers: {
        Datetime: GraphQLISODateTime,
        GraphQLJSON: GraphQLJSONObject,
      },
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
    DeveloperModule,
    ServiceModule,
    AuthModule,
    SolutionModule,
  ],
  providers: [],
  controllers: []
})

export class AppModule { }
