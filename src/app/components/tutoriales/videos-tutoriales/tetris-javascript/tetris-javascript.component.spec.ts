import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisJavascriptComponent } from './tetris-javascript.component';

describe('TetrisJavascriptComponent', () => {
  let component: TetrisJavascriptComponent;
  let fixture: ComponentFixture<TetrisJavascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetrisJavascriptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TetrisJavascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
