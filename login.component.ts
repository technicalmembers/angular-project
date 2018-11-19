import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { routerTransition } from '../router.animations';
import { LoginService } from '../shared/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    constructor(public router: Router,private loginService: LoginService) {}
     model: any = {};
     login_data: any = {};
     email: string;
    ngOnInit() {}

   /* onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }*/
    onSubmit() {
    	var body = JSON.stringify(this.model);
		    this.loginService.login(body).subscribe(
		       data => {
		       	this.login_data = data;
		       	 if(this.login_data.status==true){
		       	 	this.router.navigate(['/dashboard']);
		       	 	localStorage.setItem('isLoggedin', 'true');
              localStorage.setItem('userEmail', this.model.email);
		       	 }
		       },
		       error => {
		         console.error("Error");
		         // return Observable.throw(error);
		       }
		    )

  }
}
