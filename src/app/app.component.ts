import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      console.log('Form is valid');
    } else {
      console.log('Form is not valid');
    }
  }
}
