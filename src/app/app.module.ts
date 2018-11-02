import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TrickComponent } from './trick/trick.component';
import { TreatComponent } from './treat/treat.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TrickComponent,
    TreatComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
