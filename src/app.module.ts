import { Module } from '@nestjs/common';
import { GraphQLISODateTime, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { DeveloperModule } from './developer/developer.module';
import { ServiceModule } from './service/service.module';
import { AuthModule } from './auth/auth.module';

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
    AuthModule,
  ],
  providers: [],
  controllers: []
})

export class AppModule { }
