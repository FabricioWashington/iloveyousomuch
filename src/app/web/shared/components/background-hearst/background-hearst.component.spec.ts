import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundHearstComponent } from './background-hearst.component';

describe('BackgroundHearstComponent', () => {
  let component: BackgroundHearstComponent;
  let fixture: ComponentFixture<BackgroundHearstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackgroundHearstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundHearstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
