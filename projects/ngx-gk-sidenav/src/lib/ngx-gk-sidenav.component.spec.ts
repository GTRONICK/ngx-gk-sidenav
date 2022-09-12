import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGkSidenavComponent } from './ngx-gk-sidenav.component';

describe('NgxGkSidenavComponent', () => {
  let component: NgxGkSidenavComponent;
  let fixture: ComponentFixture<NgxGkSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGkSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGkSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
