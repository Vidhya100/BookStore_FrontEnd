import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  ResetForm! : FormGroup;
  hide=true;
  submitted = false;

  constructor(private form:FormBuilder){}
  onSubmit() {
    this.submitted = true;
  }
}
