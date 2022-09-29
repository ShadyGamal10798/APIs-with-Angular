import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditemployeeComponent } from './add-editemployee.component';

describe('AddEditemployeeComponent', () => {
  let component: AddEditemployeeComponent;
  let fixture: ComponentFixture<AddEditemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditemployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
