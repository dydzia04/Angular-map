import {Component, OnInit, ViewChild} from '@angular/core';
import {faArrowLeft, faLocationArrow, faMinus, faMinusSquare, faPlus, faPlusSquare} from '@fortawesome/free-solid-svg-icons';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-side-map-additional-data',
  templateUrl: './side-map-additional-data.component.html',
  styleUrls: ['./side-map-additional-data.component.sass']
})
export class SideMapAdditionalDataComponent implements OnInit {
  @ViewChild('togglableSide') side;
  // Form pools
  name = new FormControl('');
  flow = new FormControl('');
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
  constructor() {
  }

  toggleSidebar(): void {
    console.log(this);
    if (this.isVisible){
      this.faSquare = faPlusSquare;
      this.side.nativeElement.style.display = 'none';
      this.isVisible = false;
      return;
    }

    if (!this.isVisible){
      this.faSquare = faMinusSquare;
      this.side.nativeElement.style.display = 'grid';
      this.isVisible = true;
      return;
    }
  }

  onSubmit(form): void {
    console.log(form);
  }

  ngOnInit(): void {
  }

}
