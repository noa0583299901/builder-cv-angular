import { Component } from '@angular/core';
import { PersonalDetailsComponent } from './components/personal-details/personal-details';
import { EducationFormComponent } from './components/education-form/education-form';
import { CvPreviewComponent } from './components/cv-preview/cv-preview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PersonalDetailsComponent,
    EducationFormComponent,
    CvPreviewComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  personalDetails = {
    fullName: '',
    email: '',
    phone: '',
    summary: ''
  };

  educationList: any[] = [];

  updatePersonalDetails(data: any) {
    this.personalDetails = { ...data };
  }

  updateEducationList(data: any[]) {
    this.educationList = [...data];
  }
}