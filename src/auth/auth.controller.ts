import { Controller, Post, Body } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth.credential.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) {}

    @Post('/signUp')
    signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.authService.signUp(authCredentialsDto);
    }
}
