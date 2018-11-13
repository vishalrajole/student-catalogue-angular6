import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AddStudentComponent } from './add-student.component';

describe('AddStudentComponent', () => {
  let component: AddStudentComponent;
  let fixture: ComponentFixture<AddStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddStudentComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark add-student form as invalid', async () => {
    component.addForm.controls['rollno'].setValue('');
    component.addForm.controls['name'].setValue('');
    component.addForm.controls['degree'].setValue('');
    component.addForm.controls['city'].setValue('');
    expect(component.addForm.valid).toBeFalsy();
  })

  it('should mark add-student form as valid', async () => {
    component.addForm.controls['rollno'].setValue('2323');
    component.addForm.controls['name'].setValue('Vishal');
    component.addForm.controls['degree'].setValue('BE');
    component.addForm.controls['city'].setValue('Pune');
    expect(component.addForm.valid).toBeTruthy();
  })
});
