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
  // Define flow types to populate
  flowTypes = [
    {name: 'Przepływ wirtualny', value: 'virtual'},
    {name: 'Przepływ faktyczny', value: 'real'},
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
  currentMarker: Marker;
  constructor() {
  }

  toggleSidebar(): void {
    if (this.isVisible){
      this.faSquare = faPlusSquare;
      this.side.nativeElement.style.display = 'none';
      this.isVisible = false;
      return;
    }

    if (!this.isVisible){
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
