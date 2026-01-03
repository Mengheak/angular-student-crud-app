import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-component.html',
})
export class ReactiveFormComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
