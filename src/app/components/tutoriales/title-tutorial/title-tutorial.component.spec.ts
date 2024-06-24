import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleTutorialComponent } from './title-tutorial.component';

describe('TitleTutorialComponent', () => {
  let component: TitleTutorialComponent;
  let fixture: ComponentFixture<TitleTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
