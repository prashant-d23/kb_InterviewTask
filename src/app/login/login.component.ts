import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  loginDetails: Obj = {
    email: '',
    password: '',
  };

  constructor(private fb: FormBuilder,private http: SharedService,private router: Router) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  submit() {
    // console.log(this.loginForm.value)
    this.loginDetails = this.loginForm.value;
    this.getData();
    this.http.login();
  }
  //use this for login
  //prakhar@kilobytetech.com, 123456

  credentials: any = [];
  getData() {
    this.http.getDataFromServer('b85ab61cf4d0a3c8b643').subscribe(
      (response: any) => {
        this.credentials = JSON.parse(response.item[0].request.body.raw);

        if (this.loginDetails.email == this.credentials.email && (this.loginDetails.password == this.credentials.password)){
          this.router.navigate(['/user-data']);
        }
        else {
          alert('Wrong Credentials');
        }
      },
      (error) => {
        console.error('Error fetching credentials:', error);
        alert('An error occurred while fetching credentials.');
      }
    );
  }
}
interface Obj {
  email: string;
  password: string;
}
