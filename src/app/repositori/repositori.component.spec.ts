import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoriComponent } from './repositori.component';

describe('RepositoriComponent', () => {
  let component: RepositoriComponent;
  let fixture: ComponentFixture<RepositoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
