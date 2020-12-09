import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layout/default/default.module';
import { TurnamentComponent } from './modules/turnament/turnament.component';
import { PanitiaComponent } from './modules/panitia/panitia.component';
import { ArticlesComponent } from './modules/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    TurnamentComponent,
    PanitiaComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
