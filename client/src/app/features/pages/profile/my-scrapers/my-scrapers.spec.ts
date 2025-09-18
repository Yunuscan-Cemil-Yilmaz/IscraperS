import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyScrapers } from './my-scrapers';

describe('MyScrapers', () => {
  let component: MyScrapers;
  let fixture: ComponentFixture<MyScrapers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyScrapers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyScrapers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
