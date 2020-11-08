import { Component, OnInit } from '@angular/core';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-legend-areas',
  templateUrl: './legend-areas.component.html',
  styleUrls: ['./legend-areas.component.sass']
})
export class LegendAreasComponent implements OnInit {

  constructor() { }

  faAngleUp = faAngleUp;

  ngOnInit(): void {
  }

}
