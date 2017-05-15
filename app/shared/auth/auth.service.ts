import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/Rx';

import { CharityService } from '../charity.service';

@Injectable()
export class AuthService {
    isAuthenticated = false;

    constructor (
        private router: Router,
        private cService: CharityService
    ) {}

    signinCharity (email: string, password: string) {
        this.cService.isValidCharity(email, password);
    }

}