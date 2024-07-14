import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavesCsharpComponent } from './naves-csharp.component';

describe('NavesCsharpComponent', () => {
  let component: NavesCsharpComponent;
  let fixture: ComponentFixture<NavesCsharpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavesCsharpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavesCsharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
