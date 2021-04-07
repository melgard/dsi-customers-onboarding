import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSectionOneComponent } from './info-section-one.component';

describe('InfoSectionOneComponent', () => {
  let component: InfoSectionOneComponent;
  let fixture: ComponentFixture<InfoSectionOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSectionOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSectionOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
