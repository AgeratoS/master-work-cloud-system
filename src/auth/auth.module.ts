import { Module } from '@nestjs/common';
import { DeveloperModule } from 'src/developer/developer.module';
import { DeveloperService } from 'src/developer/developer.service';
import { LocalStrategy } from './local.auth';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Module({
    imports: [DeveloperModule, PassportModule, JwtModule.register({
        secret: 'MASTERWORK2023',
        signOptions: {
            expiresIn: '3h'
        }
    })],
    providers: [AuthService, DeveloperService, PrismaService, LocalStrategy],
    controllers: [AuthController]
})
export class AuthModule { }
