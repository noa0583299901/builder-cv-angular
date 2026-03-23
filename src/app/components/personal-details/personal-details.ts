import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-details',
  standalone: true,
 imports: [CommonModule, FormsModule],
  templateUrl: './personal-details.html',
  styleUrl: './personal-details.css'
})
export class PersonalDetailsComponent {
  // Form type: Template Driven Form
  // Reason: This form contains a small and fixed set of fields,
  // so Template Driven Forms are simple and suitable here.

  @Output() personalDetailsChange = new EventEmitter<any>();

  personalDetails = {
    fullName: '',
    email: '',
    phone: '',
    summary: ''
  };

  onFormChange() {
    this.personalDetailsChange.emit(this.personalDetails);
  }
}