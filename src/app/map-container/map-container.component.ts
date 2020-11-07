import {Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.sass']
})
export class MapContainerComponent implements OnInit {
  private map: any;

  constructor() {
  }

  ngOnInit(): void {
    this.map = new Map({
      view: new View({
        center: [50.285239, 22.7645465],
        zoom: 1
      }),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      controls: [],
      target: 'map'
    });
  }

}
