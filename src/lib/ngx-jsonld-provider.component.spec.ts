import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonldProviderComponent } from './ngx-jsonld-provider.component';

describe('NgxJsonldProviderComponent', () => {
  let component: NgxJsonldProviderComponent;
  let fixture: ComponentFixture<NgxJsonldProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxJsonldProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJsonldProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
