import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import MousePosition from 'ol/control/MousePosition';
import {createStringXY} from 'ol/coordinate';
// import {defaults as defaultControls} from 'ol/control';

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.sass']
})
export class MapContainerComponent implements OnInit {
  @Output() markerCoords: EventEmitter<any> = new EventEmitter();
  private map: any;
  private mousePositionControl: any;
  private mapCoordPosition: any;

  constructor() {
  }

  getMapCoordPosition(event: any): void {
    this.mapCoordPosition = this.map.getEventCoordinate(event);
    this.markerCoords.emit(this.mapCoordPosition);
  }

  ngOnInit(): void {
    this.mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(4),
      projection: 'EPSG:4326',
      className: 'custom-mouse-position',
      target: document.querySelector('#mouse-position'),
      undefinedHTML: '&nbsp;',
    });
    this.map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [2446935.0914242635, 6454648.369854729],
        zoom: 16
      }),
      controls: [/*this.mousePositionControl*/],
      target: 'map'
    });
  }

}
