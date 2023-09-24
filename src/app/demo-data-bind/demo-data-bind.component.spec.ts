import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDataBindComponent } from './demo-data-bind.component';

describe('DemoDataBindComponent', () => {
  let component: DemoDataBindComponent;
  let fixture: ComponentFixture<DemoDataBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoDataBindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
