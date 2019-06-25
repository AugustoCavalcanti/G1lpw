import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgumaCoisaComponent } from './alguma-coisa.component';

describe('AlgumaCoisaComponent', () => {
  let component: AlgumaCoisaComponent;
  let fixture: ComponentFixture<AlgumaCoisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlgumaCoisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlgumaCoisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
