import { Component, inject, DestroyRef } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Router, NavigationEnd } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';

@Component({
  selector: 'app-profile-navbar',
  imports: [RouterLink],
  templateUrl: './profile-navbar.html',
  styleUrl: './profile-navbar.scss'
})
export class ProfileNavbar {
  private router = inject(Router)
  private destroyRef = inject(DestroyRef);

  public isInformation: boolean = false;
  public isScrapers: boolean = false;
  public isSettings: boolean = false;

  constructor () { 
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((event: NavigationEnd) => {
        this.isInformation = false; this.isScrapers = false; this.isSettings = false;
        const url: string = event.urlAfterRedirects;
        if (url === '/profile') this.isInformation = true;
        else if (url === '/profile/my-scrapers') this.isScrapers = true;
        else if (url === '/profile/profile-settings') this.isSettings = true;
      });
  }
}
