import { Component, OnInit } from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private loginService: LoginService, private route: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
     this.loginService.login(this.email, this.password).subscribe(() => {
         this.route.navigate(['/tabs']);
      });
  }

}
