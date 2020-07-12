import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';
import { OnInit, Component } from '@angular/core';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

Cancel(){
  this.username = '';
  this.password = '';
  this.router.navigate(['/home']);
}

Login(){
  this.loginService.Login(this.username, this.password);
  this.username = '';
  this.password = '';
  this.router.navigate(['/home']);

}

}

