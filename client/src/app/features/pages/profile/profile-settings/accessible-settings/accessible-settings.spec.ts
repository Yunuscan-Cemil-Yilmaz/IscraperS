import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibleSettings } from './accessible-settings';

describe('AccessibleSettings', () => {
  let component: AccessibleSettings;
  let fixture: ComponentFixture<AccessibleSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibleSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibleSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
