import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgTemplateOutlet } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarLinksRepository } from './sidebar-link.repository';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, NgTemplateOutlet],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  public linkRepo = SidebarLinksRepository; 
  private sub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActiveByUrl(this.router.url);

    this.sub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.setActiveByUrl(e.urlAfterRedirects || e.url);
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private setActiveByUrl(currentUrl: string): void {
    const clean = this.stripQueryAndHash(currentUrl);

    this.linkRepo.forEach(link => {
      if (link.linkType === 'single') {
        link.isActive = this.matchUrl(link.linkUrl, clean);
      } else {
        const activeSub = link.subLinks?.some(s => this.matchUrl(s.linkUrl, clean)) ?? false;
        link.isActive = activeSub;
      }
    });
  }

  private matchUrl(linkUrl: string, currentUrl: string): boolean {
    const a = this.normalizePath(currentUrl);
    const b = this.normalizePath(linkUrl);
    return a === b || a.startsWith(b + '/');
  }

  private stripQueryAndHash(url: string): string {
    return url.split('?')[0].split('#')[0];
  }

  private normalizePath(url: string): string {
    if (!url) return '';
    const noQ = this.stripQueryAndHash(url);
    return noQ.endsWith('/') && noQ !== '/' ? noQ.slice(0, -1) : noQ;
  }

  public toggleSidebar = (sidebar: HTMLElement): void => {
    var isOpen = sidebar.classList.contains("sidebar-open");
    this.clearSidebar(sidebar);
    if (isOpen) this.closeSidebar(sidebar);
    else this.openSidebar(sidebar)
  }
  
  private clearSidebar = (sb: HTMLElement): void => {
    const bars = sb.querySelectorAll<HTMLElement>('.link-base-bar');
    bars.forEach(b => {this.closeLinkbar(b)});

    sb.classList.remove("sidebar-open");
    sb.classList.remove("sidebar-close");
  }
  
  private openSidebar = (sb: HTMLElement): void => {
    sb.classList.add("sidebar-open");
  }

  private closeSidebar = (sb: HTMLElement): void => {
    sb.classList.add("sidebar-close");
  }

  private closeLinkbar = (lb: HTMLElement): void => {
    lb.classList.remove("link-bar-open");
    lb.classList.remove("link-bar-close");
    lb.classList.add("link-bar-close");
  } 

  public toggleSidebarLinkBar = (event: Event): void => {
    const linkBar = (event.target as HTMLElement).closest('.link-base-bar') as HTMLElement;
    const icon = linkBar.querySelector('.link-main-bar i.link-bar-toggle-arrow-icon') as HTMLElement;
    if(!linkBar) return;
    const isOpen = linkBar?.classList.contains('link-bar-open');
    this.clearSidebarLinkbar(linkBar, icon);
    if(isOpen) this.closeSidebarLinkbar(linkBar, icon);
    else this.openSidebarLinkbar(linkBar, icon);
    console.log(linkBar);
  }

  private clearSidebarLinkbar = (lb: HTMLElement, icon: HTMLElement): void => {
    lb.classList.remove('link-bar-open');
    lb.classList.remove('link-bar-close');
    icon.classList.remove('fa-angle-down');
    icon.classList.remove('fa-angle-up');
  }

  private openSidebarLinkbar = (lb: HTMLElement, icon: HTMLElement): void => {
    icon.classList.add('fa-angle-up');
    lb.classList.add('link-bar-open');
  }

  private closeSidebarLinkbar = (lb: HTMLElement, icon: HTMLElement): void => {
    icon.classList.add('fa-angle-down');
    lb.classList.add('link-bar-close');
  }
}
