import { Component, computed, inject } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  imports: [],
  template: `
    <div *ngIf="loading()" class="loader-main-area">
      <div class="loader">
        <img src="assets/images/logo/big-logo-black-yellow-circle-removebg.png" alt="loader logo">
      </div>
    </div>
  `,
  styles: `
  .loader-main-area { 
    position: fixed;
    inset: 0;
    margin: 0; padding: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex; justify-content: center; align-items: center;
    z-index: 99;

    .loader{
      min-width: 275px; min-height: 275px;
      display: grid; place-items: center;
      will-change: transform, filter;

      &::after{
        content: "";
        position: absolute; inset: -6%;
        border-radius: 50%;
        background:
          conic-gradient(from 0deg, rgba(255,255,255,.15), rgba(255,255,255,0) 40%, rgba(255,255,255,.15) 80%, rgba(255,255,255,0));
        mask: radial-gradient(circle 49% at 50% 50%, transparent 47%, black 48%);
        animation: ring-spin 6s linear infinite;
        pointer-events: none;
      }

      img {
        width: 100%; height: 100%; display: block;
        animation: spin-pulse 3s cubic-bezier(.22,.61,.36,1) infinite;
        filter: drop-shadow(0 4px 16px rgba(255, 238, 0, 0.25));
        transform-origin: 50% 50%;
        will-change: transform;
      }
    }
  }

  @keyframes spin-pulse {
    0%   { transform: rotate(0deg) scale(1);   filter: drop-shadow(0 4px 16px rgba(255,238,0,.25)); }
    40%  { transform: rotate(144deg) scale(1.03); filter: drop-shadow(0 6px 22px rgba(255,238,0,.35)); }
    60%  { transform: rotate(216deg) scale(1.03); filter: drop-shadow(0 6px 22px rgba(255,238,0,.35)); }
    100% { transform: rotate(360deg) scale(1);  filter: drop-shadow(0 4px 16px rgba(255,238,0,.25)); }
  }

  @keyframes ring-spin {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }

  @media (prefers-reduced-motion: reduce) {
    .loader-main-area .loader::after,
    .loader-main-area .loader img {
      animation: none;
    }
  }
`
})
export class Loader {
  private loader = inject(LoaderService);
  loading = computed(() => this.loader.isLoading);
}
