import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioVerticalComponent } from './anuncio-vertical.component';

describe('AnuncioVerticalComponent', () => {
  let component: AnuncioVerticalComponent;
  let fixture: ComponentFixture<AnuncioVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnuncioVerticalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnuncioVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
