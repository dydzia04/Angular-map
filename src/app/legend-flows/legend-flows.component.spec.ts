import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendFlowsComponent } from './legend-flows.component';

describe('LegendFlowsComponent', () => {
  let component: LegendFlowsComponent;
  let fixture: ComponentFixture<LegendFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendFlowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
