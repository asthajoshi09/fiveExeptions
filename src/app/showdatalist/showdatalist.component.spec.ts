import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdatalistComponent } from './showdatalist.component';

describe('ShowdatalistComponent', () => {
  let component: ShowdatalistComponent;
  let fixture: ComponentFixture<ShowdatalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdatalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdatalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
