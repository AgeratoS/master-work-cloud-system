import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeveloperModule } from './developer/developer.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'elsolcansado',
      password: 'root',
      database: 'elsolcansado',
      schema: 'proxydb',
      autoLoadEntities: true,
      synchronize: true
    }),
    DeveloperModule,
    ServiceModule,
  ],
  providers: [],
  controllers: []
})

export class AppModule { }
