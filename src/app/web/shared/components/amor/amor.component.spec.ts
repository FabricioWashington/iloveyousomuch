import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmorComponent } from './amor.component';

describe('AmorComponent', () => {
  let component: AmorComponent;
  let fixture: ComponentFixture<AmorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
