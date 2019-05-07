import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { timer } from 'rxjs';

@Injectable()
export class TwoSecondsDelayResolver implements Resolve<Promise<void>> {
    constructor() { }

    async resolve() {
        await timer(2000).toPromise();
    }
}