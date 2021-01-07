import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-lurah',
  templateUrl: './lurah.component.html',
  styleUrls: ['./lurah.component.scss'],
})
export class LurahComponent implements OnInit {
  createLurah: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.initForm();
  }

  ngOnInit(): void {}

  create() {
    this.authService.createLurah(this.createLurah.value);
  }

  private initForm() {
    this.createLurah = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      username: [''],
      password: [''],
      region: this.fb.group({
        district: [''],
        subDistrict: [''],
      }),
      role: ['Headman'],
    });
  }
}
