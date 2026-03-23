# Builder CV - Angular Forms Project

## Project Description

Builder CV is an Angular application for creating a live CV preview.
The system allows the user to enter personal details and education details, while the CV display updates in real time.

This project demonstrates the use of both:

* Template Driven Forms
* Reactive Forms

---

## Features

### Personal Details Form (Template Driven)

Includes:

* Full name
* Email
* Phone number
* Short description

Validations:

* All fields are required
* Email must be valid
* Phone must contain digits only

---

### Education Form (Reactive Forms)

Includes:

* Institution
* Degree type
* Field of study
* Start date
* End date
* Status
* Grade average
* Courses (dynamic)
* Honors
* Description

Features:

* Add/remove education items
* Add/remove courses dynamically

Validations:

* All fields required
* End date optional if currently studying
* Grade between 0–100
* End date must be after start date

---

## Live Preview

The CV updates automatically as the user types.

---

## Technologies

* Angular
* TypeScript
* HTML / CSS
* FormsModule
* ReactiveFormsModule

---

## How to Run

```bash
npm install
ng serve
```

Then open:
http://localhost:4200

---

## Notes

* Personal Details → Template Driven Form
* Education Form → Reactive Form
* The project uses component-based architecture and data binding
