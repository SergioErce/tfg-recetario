import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  hide = true;

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.formBuilder.group({
      user: '',
      pass: ''
    });

    const user = sessionStorage.getItem('user');
    if (user) {
      this.router.navigate(['home']);
    }
  }

  submitUser() {
    const formData = new FormData();
    const username = this.loginForm.get('user')?.value;
    const password = this.loginForm.get('pass')?.value;
    formData.append('user', username);
    formData.append('pass', password);

    this.http.post<any>('http://localhost/tfg/register.php', formData).subscribe(data => {

      if (data.message) {
        this.router.navigate(['home']);
      } else if (data.error) {
        alert(data.error);
      }
    });
  }
}
