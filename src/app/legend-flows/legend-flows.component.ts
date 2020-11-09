import {Component, OnInit, ViewChild} from '@angular/core';
import {faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-legend-flows',
  templateUrl: './legend-flows.component.html',
  styleUrls: ['./legend-flows.component.sass']
})
export class LegendFlowsComponent implements OnInit {

  @ViewChild('list') list;
  constructor() {
  }

  faAngle = faAngleDown;
  isShown = false;
  flowsList = [
    {text: 'Przepływ nieznany', icon: ''},
    {text: 'Przepływ - SUW/ZUW', icon: ''},
    {text: 'Przepływ - zbiornik', icon: ''},
    {text: 'Przepływ międzystrefowy', icon: ''},
    {text: 'Sprzedaż - Online', icon: ''},
    {text: 'Sprzedaż - odczyt co 12h', icon: ''},
    {text: 'Sprzedaż - odczyt ręczny', icon: ''},
    {text: 'Przepływ wirtualny', icon: ''},
    {text: 'Przepływ nieznany', icon: ''},
    {text: 'Przepływ - SUW/ZUW', icon: ''},
    {text: 'Przepływ - zbiornik', icon: ''},
    {text: 'Przepływ międzystrefowy', icon: ''},
    {text: 'Sprzedaż - Online', icon: ''},
    {text: 'Sprzedaż - odczyt co 12h', icon: ''},
    {text: 'Sprzedaż - odczyt ręczny', icon: ''},
    {text: 'Przepływ wirtualny', icon: ''},
  ];

  toggleList(elem): void {
    console.log(this.list);
    if (this.isShown) {
      elem.faAngle = faAngleDown;
      this.list.nativeElement.style.display = 'none';
      this.isShown = false;
      return;
    }

    if (!this.isShown) {
      elem.faAngle = faAngleUp;
      this.list.nativeElement.style.display = 'block';
      this.isShown = true;
      return;
    }
  }

  ngOnInit(): void {
  }

}
