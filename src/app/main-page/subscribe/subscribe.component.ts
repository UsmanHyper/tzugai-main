import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {

  email: FormControl
  
  constructor(private fb: FormBuilder, private apiService: ApiService,) {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]);
    
  }

  ngOnInit(): void {
  }

  signUp() {
    if (!this.email.valid) {
      console.log("Please enter a valid email")
      return;
    }
    else {
      const slug = new URL(`${environment.baseUrl}subscribed`);
      this.apiService.post(slug.href, { email: this.email.value }).subscribe((res: any) => {
        console.log(res);
      }, (err: any) => {
        console.log(err['error']['error'])
      });

    }
  }
}
