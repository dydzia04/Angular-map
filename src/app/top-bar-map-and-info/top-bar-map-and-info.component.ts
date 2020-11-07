import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar-map-and-info',
  templateUrl: './top-bar-map-and-info.component.html',
  styleUrls: ['./top-bar-map-and-info.component.sass']
})
export class TopBarMapAndInfoComponent implements OnInit {

  appTitle = 'NLM';
  description = 'POWERED BY DHI';

  constructor() { }

  ngOnInit(): void {
  }

}
