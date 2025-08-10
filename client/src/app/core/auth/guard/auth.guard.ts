import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);
    const auth = inject(AuthService);

    if(!auth.hasToken()) return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });

    return auth.validateToken().pipe(
        map(isValid => {
            if (isValid) return true;
            return router.createUrlTree(['/login'], { queryParams: { returnUrl: state.url } });
        })
    );
}