import { Module } from '@nestjs/common';
import { GraphQLISODateTime, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DeveloperModule } from './developer/developer.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      resolvers: {
        Datetime: GraphQLISODateTime
      },
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
    DeveloperModule,
    ServiceModule,
  ],
  providers: [],
  controllers: []
})

export class AppModule { }
