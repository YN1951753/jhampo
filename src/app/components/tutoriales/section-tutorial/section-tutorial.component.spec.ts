import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTutorialComponent } from './section-tutorial.component';

describe('SectionTutorialComponent', () => {
  let component: SectionTutorialComponent;
  let fixture: ComponentFixture<SectionTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
