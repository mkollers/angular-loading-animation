import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingOverlayModule } from '@kollers/loading-overlay';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiveSecondsDelayResolver } from './resolvers/five-seconds-delay.resolver';
import { TwoSecondsDelayResolver } from './resolvers/two-seconds-delay.resolver';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoadingOverlayModule,

    // Material
    MatButtonModule,

    // Custom
    AppRoutingModule
  ],
  providers: [TwoSecondsDelayResolver, FiveSecondsDelayResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
