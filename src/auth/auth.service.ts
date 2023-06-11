import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Developer } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { DeveloperService } from 'src/developer/developer.service';

@Injectable()
export class AuthService {
    constructor(private readonly developersService: DeveloperService, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.developersService.findByLoginPassword(username, password);
        if (!user) {
            return null;
        }
        const passwordValid = password === user.password;
        if (!user) {
            throw new NotAcceptableException('Could not find the user');
        }
        if (user && passwordValid) {
            return user;
        }
        return null;
    }

    async login(user: Developer) {
        const payload = { username: user.login, sub: user.id };
        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}
