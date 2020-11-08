import {Component, OnInit, ViewChild} from '@angular/core';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-legend-areas',
  templateUrl: './legend-areas.component.html',
  styleUrls: ['./legend-areas.component.sass']
})
export class LegendAreasComponent implements OnInit {

  @ViewChild('list') list;
  constructor() {
  }

  faAngle = faAngleUp;
  isShown = true;
  areasList = [
    {color: '#DBE4E9', value: 'brak'},
    {color: '#4DFF4D', value: 0},
    {color: '#5FE645', value: 10},
    {color: '#71CC3E', value: 20},
    {color: '#82B336', value: 30},
    {color: '#94992E', value: 40},
    {color: '#A68027', value: 50},
    {color: '#B8661F', value: 60},
    {color: '#CA4C17', value: 70},
    {color: '#DB330F', value: 80},
    {color: '#ED1908', value: 90},
    {color: '#FF0000', value: 100},
  ];

  toggleList(elem): void {
    console.log(this.list);
    if (this.isShown){
      elem.faAngle = faAngleDown;
      this.list.nativeElement.style.display = 'none';
      this.isShown = false;
      return;
    }

    if (!this.isShown){
      elem.faAngle = faAngleUp;
      this.list.nativeElement.style.display = 'block';
      this.isShown = true;
      return;
    }
  }

  ngOnInit(): void {
  }

}
