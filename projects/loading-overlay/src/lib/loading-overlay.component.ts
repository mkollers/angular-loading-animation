import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { merge, Observable } from 'rxjs';
import { filter, mapTo, takeWhile } from 'rxjs/operators';
import { LoadingOverlayService } from './loading-overlay.service';

@Component({
  selector: 'kollers-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingOverlayComponent implements OnDestroy {
  isRouting$: Observable<boolean>;
  alive = true;

  constructor(
    private _loadingOverlayService: LoadingOverlayService,
    private _router: Router
  ) {
    this._setup();
  }

  ngOnDestroy = () => this.alive = false;

  /* Start subscribing routing events to track when routing starts and wenn it ends, to a loading indicator */
  private _setup() {
    const navigationStart$ = this._router.events.pipe(
      takeWhile(() => this.alive),
      filter(event => event instanceof NavigationStart),
      mapTo(true)
    );
    const navigationEnd$ = this._router.events.pipe(
      takeWhile(() => this.alive),
      filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError),
      mapTo(false)
    );
    this.isRouting$ = merge(navigationStart$, navigationEnd$, this._loadingOverlayService.isLoading$);
  }
}
