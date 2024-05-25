import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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

  checkUser() {
    const formData = new FormData();
    const username = this.loginForm.get('user')?.value;
    const password = this.loginForm.get('pass')?.value;
    formData.append('user', username);
    formData.append('pass', password);

    this.http.post<any>('http://localhost/tfg/users.php', formData).subscribe(data => {

      if (data.message) {
        sessionStorage.setItem('user', username);
        this.router.navigateByUrl(this.route.snapshot.queryParams['returnUrl']);
      } else if (data.error) {
        alert(data.error);
      }
    });
  }
  register(){
    this.router.navigate(['register']);
  }
}
