import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodigoDesign1Component } from './codigo-design-1.component';

describe('CodigoDesign1Component', () => {
  let component: CodigoDesign1Component;
  let fixture: ComponentFixture<CodigoDesign1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodigoDesign1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodigoDesign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
