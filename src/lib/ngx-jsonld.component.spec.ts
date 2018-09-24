import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonldComponent } from './ngx-jsonld.component';

describe('NgxJsonldComponent', () => {
  let component: NgxJsonldComponent;
  let fixture: ComponentFixture<NgxJsonldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxJsonldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJsonldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
