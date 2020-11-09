import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {faArrowLeft, faLocationArrow, faMinus, faMinusSquare, faPlus, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {FormControl} from '@angular/forms';

interface Marker
{
  id: string;
  name: string;
  type: string;
  coordinates: [number, number];
  flow: number;
}

@Component({
  selector: 'app-side-map-additional-data',
  templateUrl: './side-map-additional-data.component.html',
  styleUrls: ['./side-map-additional-data.component.sass']
})
export class SideMapAdditionalDataComponent implements OnInit {
  @Input() mapCoords: any;
  @ViewChild('togglableSide') side;
  @ViewChild('legends') legends;
  // Define flow types to populate
  flowTypes = [
    {text: 'Przepływ nieznany', icon: '', value: 'unknown'},
    {text: 'Przepływ - SUW/ZUW', icon: '', value: 'SUW/ZUW'},
    {text: 'Przepływ - zbiornik', icon: '', value: 'container'},
    {text: 'Przepływ międzystrefowy', icon: '', value: 'between-areas'},
    {text: 'Sprzedaż - Online', icon: '', value: 'online'},
    {text: 'Sprzedaż - odczyt co 12h', icon: '', value: 'read-12h'},
    {text: 'Sprzedaż - odczyt ręczny', icon: '', value: 'manual-read'},
    {text: 'Przepływ wirtualny', icon: '', value: 'virtual'},
  ];
  // FontAwesome icons
  faArrow = faLocationArrow;
  faPlus = faPlus;
  faMinus = faMinus;
  faSquare = faPlusSquare;
  faArrowLeft = faArrowLeft;
  isVisible = false;
  name = new FormControl('');
  flow = new FormControl('');
  // Map things
  currentMarker: Marker;
  map: any;
  constructor() {
  }

  toggleSidebar(): void {
    if (this.isVisible){
      if ( window.screen.width < 768 ){
        this.legends.nativeElement.style.display = 'grid';
      }
      this.faSquare = faPlusSquare;
      this.side.nativeElement.style.display = 'none';
      this.isVisible = false;
      return;
    }

    if (!this.isVisible){
      if ( window.screen.width < 768 ){
        this.legends.nativeElement.style.display = 'none';
      }
      this.faSquare = faMinusSquare;
      this.side.nativeElement.style.display = 'block';
      this.isVisible = true;
      return;
    }
  }
  onSubmit(): void {
    this.currentMarker.coordinates = this.mapCoords;
    this.currentMarker.id = '_' + Math.random().toString(36).substr(2, 9);
    console.log(this.currentMarker);
    localStorage.setItem(this.currentMarker.id, JSON.stringify(this.currentMarker));
    // Clear marker after adding it to LS
    this.currentMarker = {
      id: '',
      name: '',
      type: '',
      coordinates: [0, 0],
      flow: 0
    };
    console.log(localStorage);
    console.log(this.currentMarker);
  }

  ngOnInit(): void {
    this.currentMarker = {
      id: '',
      name: '',
      type: '',
      coordinates: [0, 0],
      flow: 0
    };
  }

  updateName(event): void {
    this.currentMarker.name = event.target.value;
  }

  updateType(event): void {
    this.currentMarker.type = event.target.value;
  }

  updateFlow(event): void {
    this.currentMarker.flow = event.target.value;
  }
}
