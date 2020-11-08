import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legend-flows',
  templateUrl: './legend-flows.component.html',
  styleUrls: ['./legend-flows.component.sass']
})
export class LegendFlowsComponent implements OnInit {

  constructor() { }

  flowsList = [
    {text: 'Przepływ nieznany', icon: ''},
    {text: 'Przepływ - SUW/ZUW', icon: ''},
    {text: 'Przepływ - zbiornik', icon: ''},
    {text: 'Przepływ międzystrefowy', icon: ''},
    {text: 'Sprzedaż - Online', icon: ''},
    {text: 'Sprzedaż - odczyt co 12h', icon: ''},
    {text: 'Sprzedaż - odczyt ręczny', icon: ''},
    {text: 'Przepływ wirtualny', icon: ''},
  ];

  ngOnInit(): void {
  }

}
