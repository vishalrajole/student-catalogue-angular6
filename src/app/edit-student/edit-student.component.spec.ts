import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EditStudentComponent } from './edit-student.component';

describe('EditStudentComponent', () => {
  let component: EditStudentComponent;
  let fixture: ComponentFixture<EditStudentComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditStudentComponent],
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [
        // reference the new instance of formBuilder from above
        { provide: FormBuilder, useValue: formBuilder }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStudentComponent);
    component = fixture.componentInstance;
    // pass in the form dynamically
    component.editForm = formBuilder.group({
      rollno: null,
      name: null,
      city: null,
      degree: null
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark edit-student form as invalid', async () => {
    localStorage.setItem("editRollNo", '1111');
    component.editForm.controls['rollno'].setValue(localStorage.getItem('editRollNo'));
    component.editForm.controls['name'].setValue('');
    component.editForm.controls['degree'].setValue('');
    component.editForm.controls['city'].setValue('');
    expect(component.editForm.valid).toBeFalsy();
  })

  it('should mark edit-student form as valid', async () => {
    component.editForm.controls['rollno'].setValue('2323');
    component.editForm.controls['name'].setValue('Vishal');
    component.editForm.controls['degree'].setValue('BE');
    component.editForm.controls['city'].setValue('Pune');
    expect(component.editForm.valid).toBeTruthy();
  })
});
