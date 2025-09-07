import { Injectable, Inject, inject } from "@angular/core";
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from "@angular/router";
import { filter } from "rxjs";
import { LoaderService } from "./loader.service";

@Injectable({ providedIn: 'root' })
export class RouterLoaderService {
    private router = inject(Router)
    private loader = inject(LoaderService)

    constructor() {
        this.router.events.pipe(
            filter(e => e instanceof NavigationStart)
        ).subscribe(() => this.loader.show());

        this.router.events.pipe(
            filter(e => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError)
        ).subscribe(() => this.loader.hide());
    }
}