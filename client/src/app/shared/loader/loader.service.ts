import { Injectable, signal, computed } from "@angular/core";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private _count = signal(0);
  readonly isLoading = computed(() => this._count() > 0);

  show(): void { this._count.update(c => c + 1); }
  hide(): void { this._count.update(c => Math.max(0, c - 1)); }

  async wrapPromise<T>(p: Promise<T>): Promise<T> {
    this.show();
    try { return await p; }
    finally { this.hide(); }
  }

  wrapObservable<T>(source$: Observable<T>): Observable<T> {
    this.show();
    return source$.pipe(finalize(() => this.hide()));
  }
}


// async onManualWork() {
//   this.loader.show();
//   try {
//     await new Promise(res => setTimeout(res, 1200));
//   } finally {
//     this.loader.hide();
//   }
// }




// doGet$() {
//   return this.loader.wrapObservable(
//     this.http.get('/api/customers?page=1')
//   );
// }

// ngOnInit() {
//   this.doGet$().subscribe({ next: data => /* ... */ });
// }



// async save() {
//   const result = await this.loader.wrapPromise(
//     fetch('/api/save', { method: 'POST' })
//       .then(r => r.json())
//   );
//   // result...
// }