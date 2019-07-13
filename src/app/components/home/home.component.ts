import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public types = ['Low', 'Medium', 'High'];
  public addCommentForm: FormGroup;
  public comments: Array<any>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addCommentForm = this.fb.group({
      type: ['', [Validators.required]],
      comment: ['', [Validators.required]]
    });
  }

  public submit() {
    if (this.addCommentForm.invalid) {
      return;
    }

    let comment = {};
  }
}
