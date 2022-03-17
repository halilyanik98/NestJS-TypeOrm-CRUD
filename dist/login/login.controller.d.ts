import { AuthService } from './auth/auth.service';
export declare class LoginController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
    deneme(id: number): string;
}