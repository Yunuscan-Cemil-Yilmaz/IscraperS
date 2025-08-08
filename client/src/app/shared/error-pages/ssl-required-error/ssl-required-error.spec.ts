import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SslRequiredError } from './ssl-required-error';

describe('SslRequiredError', () => {
  let component: SslRequiredError;
  let fixture: ComponentFixture<SslRequiredError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SslRequiredError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SslRequiredError);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
