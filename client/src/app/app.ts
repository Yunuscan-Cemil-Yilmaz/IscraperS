import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Loader } from "./shared/loader/loader";
import { RouterLoaderService } from './shared/loader/router-loader.service';
import { LoaderService } from './shared/loader/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Loader],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('client');
  private _routerLoader = inject(RouterLoaderService);
}
