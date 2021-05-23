import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PWD_PATTERN } from '../../models/LoginModel';

@Component({
  selector: 'app-authentication-page',
  templateUrl: './authentication-page.component.html',
  styleUrls: ['./authentication-page.component.scss']
})
export class AuthenticationPageComponent implements OnInit {
  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.pattern(PWD_PATTERN)]]
  })
  constructor(
    private fb:FormBuilder
  ) { }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }
  ngOnInit(): void {
  }

}
