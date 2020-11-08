import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendAreasComponent } from './legend-areas.component';

describe('LegendAreasComponent', () => {
  let component: LegendAreasComponent;
  let fixture: ComponentFixture<LegendAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
