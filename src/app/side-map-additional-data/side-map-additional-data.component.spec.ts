import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMapAdditionalDataComponent } from './side-map-additional-data.component';

describe('SideMapAdditionalDataComponent', () => {
  let component: SideMapAdditionalDataComponent;
  let fixture: ComponentFixture<SideMapAdditionalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMapAdditionalDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMapAdditionalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
