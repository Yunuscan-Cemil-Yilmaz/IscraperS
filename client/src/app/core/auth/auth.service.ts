import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, map, catchError, timer, switchMap } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
    private http = inject(HttpClient);

    hasToken(): boolean {
        // check has token in cookies http only ? 
        return true;
    }

    validateToken(): Observable<boolean> {
        // const token = localStorage.getItem('access_token');
        // if (!token) return of(false);

        // // Örn: ufak bir gecikme ile (opsiyonel) simüle
        // return timer(0).pipe(
        //     switchMap(() => this.http.get<{ valid: boolean }>('/api/auth/validate')),
        //     map(res => !!res.valid),
        //     catchError(() => of(false))
        // );

        return of(true);
    }
}