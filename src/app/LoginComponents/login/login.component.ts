import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

// email : string ='';
// password :string ='';
faLock = faLock;
loginForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl(''),
});
constructor(private router: Router){
}

ngOnInit(): void {
  // if (this.auth.isLoggedIn()) {
  //   this.router.navigate(['admin']);
  // }
}
onSubmit(): void {
  if (this.loginForm.valid) {
    // this.router.navigate(['products'])
    console.log(this.loginForm.value)
    // this.auth.login(this.loginForm.value).subscribe(
    //   (result) => {
    //     console.log(result);
    //     this.router.navigate(['/admin']);
    //   },
    //   (err: Error) => {
    //     alert(err.message);
    //   }
    // );
  }
}

// loginUser(){
// if (this.email=='example@email.com' && this.password =='123'){
//   alert('You are authorized');
// }
// else{
//   alert('You are outsider');
// }
// }
 }
