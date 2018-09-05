import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRepositoriesComponent } from './list-of-repositories.component';

describe('ListOfRepositoriesComponent', () => {
  let component: ListOfRepositoriesComponent;
  let fixture: ComponentFixture<ListOfRepositoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfRepositoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
