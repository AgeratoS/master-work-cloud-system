import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RootResolver } from './root/root.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
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
    })
  ],
  providers: [RootResolver],
  controllers: []
})
export class AppModule { }
