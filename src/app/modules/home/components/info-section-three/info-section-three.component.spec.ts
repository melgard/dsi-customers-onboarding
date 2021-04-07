import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSectionThreeComponent } from './info-section-three.component';

describe('InfoSectionThreeComponent', () => {
  let component: InfoSectionThreeComponent;
  let fixture: ComponentFixture<InfoSectionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSectionThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSectionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
