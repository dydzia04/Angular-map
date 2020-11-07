import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarMapAndInfoComponent } from './top-bar-map-and-info.component';

describe('TopBarMapAndInfoComponent', () => {
  let component: TopBarMapAndInfoComponent;
  let fixture: ComponentFixture<TopBarMapAndInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarMapAndInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarMapAndInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
