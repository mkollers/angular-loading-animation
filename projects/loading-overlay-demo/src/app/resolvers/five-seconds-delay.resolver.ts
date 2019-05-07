import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { timer } from 'rxjs';

@Injectable()
export class FiveSecondsDelayResolver implements Resolve<Promise<void>> {
    constructor() { }

    async resolve() {
        await timer(5000).toPromise();
    }
}