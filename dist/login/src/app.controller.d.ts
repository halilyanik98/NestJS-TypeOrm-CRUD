import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: any;
    }>;
    getProfile(req: any): any;
    deneme(id: number): string;
}
