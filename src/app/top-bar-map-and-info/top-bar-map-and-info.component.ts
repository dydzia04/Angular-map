import {Component, OnInit} from '@angular/core';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar-map-and-info',
  templateUrl: './top-bar-map-and-info.component.html',
  styleUrls: ['./top-bar-map-and-info.component.sass']
})
export class TopBarMapAndInfoComponent implements OnInit {

  appTitle = 'NLM';
  description = 'POWERED BY DHI';

  // FontAwesome icons
  faAngleDown = faAngleDown;

  constructor() {
  }

  ngOnInit(): void {
  }

}
