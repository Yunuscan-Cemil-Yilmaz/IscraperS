import { Component, DestroyRef, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-topbar',
  imports: [RouterLink],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss'
})
export class Topbar {
  @ViewChild('toggleIcon', { static: true }) toggleIcon!: ElementRef<HTMLElement>;
  @ViewChild('menu',       { static: true }) menu!: ElementRef<HTMLElement>;

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(() => {
        const menu = this.menu?.nativeElement;
        const icon = this.toggleIcon.nativeElement;
        if (!menu && !icon) return;
        menu.classList.remove('topbar-menu-open');
        menu.classList.add('topbar-menu-close');
        icon.className = 'fa-solid fa-angle-down';
      });
  }

  toggleTopbarMenu = (toggleIcon: HTMLElement, menu: HTMLElement): void => {
    const isOpen: boolean = toggleIcon.classList.contains('fa-angle-up') && !toggleIcon.classList.contains('fa-angle-down');

    toggleIcon.className = ''
    toggleIcon.classList.add('fa-solid');
    menu.classList.remove('topbar-menu-close');
    menu.classList.remove('topbar-menu-open');
    if(isOpen) { // close the menu
      toggleIcon.classList.add('fa-angle-down');
      menu.classList.add('topbar-menu-close');

    } else { // open the menu
      toggleIcon.classList.add('fa-angle-up');
      menu.classList.add('topbar-menu-open')
    }
  }
}