import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConviteComponent } from './dialog-convite.component';

describe('DialogConviteComponent', () => {
  let component: DialogConviteComponent;
  let fixture: ComponentFixture<DialogConviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogConviteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogConviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
