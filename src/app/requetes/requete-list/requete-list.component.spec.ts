import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeteListComponent } from './requete-list.component';

describe('RequeteListComponent', () => {
  let component: RequeteListComponent;
  let fixture: ComponentFixture<RequeteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequeteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequeteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
