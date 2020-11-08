import {Component, OnInit} from '@angular/core';
import {faLocationArrow, faMinus, faPlus} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-map-additional-data',
  templateUrl: './side-map-additional-data.component.html',
  styleUrls: ['./side-map-additional-data.component.sass']
})
export class SideMapAdditionalDataComponent implements OnInit {

  constructor() {
  }

  faArrow = faLocationArrow;
  faPlus = faPlus;
  faMinus = faMinus;

  ngOnInit(): void {
  }

}
