import { Component, OnInit } from '@angular/core';
import {routerTransition} from "../router.animations";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [routerTransition]
})
export class NavComponent implements OnInit {

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

  constructor() { }

  ngOnInit() {
  }

}
