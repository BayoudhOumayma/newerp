import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeknivaComponent } from './tekniva.component';

describe('TeknivaComponent', () => {
  let component: TeknivaComponent;
  let fixture: ComponentFixture<TeknivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeknivaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeknivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
