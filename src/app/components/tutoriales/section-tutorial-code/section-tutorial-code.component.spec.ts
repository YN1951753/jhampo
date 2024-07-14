import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTutorialCodeComponent } from './section-tutorial-code.component';

describe('SectionTutorialCodeComponent', () => {
  let component: SectionTutorialCodeComponent;
  let fixture: ComponentFixture<SectionTutorialCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTutorialCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTutorialCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
