import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxupdatesComponent } from './taxupdates.component';

describe('TaxupdatesComponent', () => {
  let component: TaxupdatesComponent;
  let fixture: ComponentFixture<TaxupdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxupdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxupdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
