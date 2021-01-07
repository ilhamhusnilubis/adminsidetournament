import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { TokenService } from 'src/app/auth/token.service';

@Component({
  selector: 'app-createpanitia',
  templateUrl: './createpanitia.component.html',
  styleUrls: ['./createpanitia.component.scss'],
})
export class CreatepanitiaComponent implements OnInit {
  createPanitiaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private token: TokenService
  ) {
    this.initForm();
  }

  ngOnInit(): void {}

  private initForm() {
    this.createPanitiaForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      username: [''],
      password: [''],
      role: ['Comitte'],
    });
  }

  create() {
    console.log(this.createPanitiaForm.value);

    const headmanPayload = this.token.getPayloadData;
    this.authService.createPanitia(
      headmanPayload.userId,
      this.createPanitiaForm.value
    );
  }
}
