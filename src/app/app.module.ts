import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CParentComponent } from './c-parent/c-parent.component';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    CParentComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
