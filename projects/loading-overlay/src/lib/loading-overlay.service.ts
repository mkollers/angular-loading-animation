import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingOverlayService {
  isLoading$ = new BehaviorSubject<boolean>(false);

  get isLoading() {
    return this.isLoading$.value;
  }

  set isLoading(isLoading: boolean) {
    this.isLoading$.next(isLoading);
  }
}
