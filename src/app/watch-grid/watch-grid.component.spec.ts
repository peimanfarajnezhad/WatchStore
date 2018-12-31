import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchGridComponent } from './watch-grid.component';

describe('WatchGridComponent', () => {
  let component: WatchGridComponent;
  let fixture: ComponentFixture<WatchGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
