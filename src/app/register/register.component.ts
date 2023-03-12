import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // uname=''
  // acno=''
  // psw=''
  //[^0-9a-zA-Z]

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }


  registerForm=this.fb.group({uname:['',[Validators.required,Validators.pattern('[a-zA-Z]')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+')]]
})


  register(): void{

    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var psw=this.registerForm.value.psw

    if(this.registerForm.valid){

      const result=this.ds.register(acno,uname,psw)

    if(result){
      alert('registration sucess')
      this.router.navigateByUrl('')
    }
    else{
      alert('registration exist')
      this.router.navigateByUrl('')
    }
  }
  else{
    alert("invalid Form")
      }
  }
}
