import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import MousePosition from 'ol/control/MousePosition';
import {createStringXY} from 'ol/coordinate';
import {toLonLat} from 'ol/proj';
import {toStringHDMS} from 'ol/coordinate';
import Overlay from 'ol/Overlay';
declare var $: any;

@Component({
  selector: 'app-map-container',
  templateUrl: './map-container.component.html',
  styleUrls: ['./map-container.component.sass']
})
export class MapContainerComponent implements OnInit {
  @Output() markerCoords: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:variable-name
  private map: any;
  private mousePositionControl: any;
  private mapCoordPosition: any;
  private popup: any;
  private marker: any;
  private vienna: any;

  constructor() {
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
    this.popup = new Overlay({
      element: document.getElementById('popup'),
    });
    this.map.addOverlay(this.popup);
    this.marker = new Overlay({
      position: this.mapCoordPosition,
      positioning: 'center-center',
      element: document.getElementById('marker'),
      stopEvent: false,
    });
    this.map.addOverlay(this.marker);
    this.vienna = new Overlay({
      position: this.mapCoordPosition,
      element: document.getElementById('vienna'),
    });
    this.map.addOverlay(this.vienna);
  }

  getMapCoordPosition(event: any): void {
    this.mapCoordPosition = this.map.getEventCoordinate(event);
    this.markerCoords.emit(this.mapCoordPosition);
  }

  setMarker(): void {
    const element = this.popup.getElement();
    const hdms = toStringHDMS(toLonLat(this.mapCoordPosition));

    $(element).popover('dispose');
    this.popup.setPosition(this.mapCoordPosition);
    $(element).popover({
      container: element,
      placement: 'top',
      animation: false,
      html: true,
      content: '<p>The location you clicked was:</p><code>' + hdms + '</code>',
    });
    $(element).popover('show');
  }
}
