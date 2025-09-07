import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedError } from './unauthorized-error';

describe('UnauthorizedError', () => {
  let component: UnauthorizedError;
  let fixture: ComponentFixture<UnauthorizedError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnauthorizedError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthorizedError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
