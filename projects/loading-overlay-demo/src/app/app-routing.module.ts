import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FiveSecondsDelayResolver } from './resolvers/five-seconds-delay.resolver';
import { TwoSecondsDelayResolver } from './resolvers/two-seconds-delay.resolver';


const routes: Routes = [
    {
        path: 'route-1',
        component: AppComponent,
        resolve: { delay: TwoSecondsDelayResolver }
    },
    {
        path: 'route-2',
        component: AppComponent,
        resolve: { delay: FiveSecondsDelayResolver }
    },
    { path: '**', redirectTo: 'route-1' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
