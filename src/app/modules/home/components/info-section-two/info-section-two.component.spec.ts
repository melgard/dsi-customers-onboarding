import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSectionTwoComponent } from './info-section-two.component';

describe('InfoSectionTwoComponent', () => {
  let component: InfoSectionTwoComponent;
  let fixture: ComponentFixture<InfoSectionTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSectionTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSectionTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
