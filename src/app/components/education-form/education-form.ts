import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-education-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './education-form.html',
  styleUrl: './education-form.css'
})
export class EducationFormComponent implements OnInit {
  // Form type: Reactive Form
  // Reason: This form includes dynamic education items, dynamic courses,
  // and custom validations, so Reactive Forms are more appropriate.

  @Output() educationListChange = new EventEmitter<any[]>();

  educationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.educationForm = this.fb.group({
      educationItems: this.fb.array([])
    });

    this.addEducationItem();

    this.educationForm.valueChanges.subscribe(() => {
      this.educationListChange.emit(this.educationItems.value);
    });
  }

  get educationItems(): FormArray {
    return this.educationForm.get('educationItems') as FormArray;
  }

  createEducationItem(): FormGroup {
    const group = this.fb.group(
      {
        institution: ['', Validators.required],
        degreeType: ['', Validators.required],
        fieldOfStudy: ['', Validators.required],
        startDate: ['', Validators.required],
        endDate: [''],
        status: ['', Validators.required],
        gradeAverage: [
          '',
          [Validators.required, Validators.min(0), Validators.max(100)]
        ],
        courses: this.fb.array([
          this.fb.control('', Validators.required)
        ]),
        honors: [false],
        description: ['', Validators.required]
      },
      { validators: this.dateValidator }
    );

    group.get('status')?.valueChanges.subscribe((status) => {
      const endDateControl = group.get('endDate');

      if (status === 'לומדת כרגע') {
        endDateControl?.clearValidators();
        endDateControl?.setValue('');
      } else {
        endDateControl?.setValidators([Validators.required]);
      }

      endDateControl?.updateValueAndValidity();
    });

    return group;
  }

  addEducationItem() {
    this.educationItems.push(this.createEducationItem());
  }

  removeEducationItem(index: number) {
    if (this.educationItems.length > 1) {
      this.educationItems.removeAt(index);
    }
  }

  getCourses(educationIndex: number): FormArray {
    return this.educationItems.at(educationIndex).get('courses') as FormArray;
  }

  addCourse(educationIndex: number) {
    this.getCourses(educationIndex).push(
      this.fb.control('', Validators.required)
    );
  }

  removeCourse(educationIndex: number, courseIndex: number) {
    const courses = this.getCourses(educationIndex);
    if (courses.length > 1) {
      courses.removeAt(courseIndex);
    }
  }

  dateValidator(control: AbstractControl) {
    const startDate = control.get('startDate')?.value;
    const endDate = control.get('endDate')?.value;
    const status = control.get('status')?.value;

    if (status === 'לומדת כרגע') {
      return null;
    }

    if (startDate && endDate && new Date(endDate) <= new Date(startDate)) {
      return { invalidDateRange: true };
    }

    return null;
  }
}