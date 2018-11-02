import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { TrickComponent } from './trick/trick.component';
import { TreatComponent } from './treat/treat.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: "", redirectTo: "trick", pathMatch: "full"},
  {path: "trick", component: TrickComponent, data: {state: "trick"}},
  {path: "treat", component: TreatComponent, data: {state: "treat"}},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRouterModule { }
