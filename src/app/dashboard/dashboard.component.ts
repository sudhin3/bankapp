import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  // acno=''
  // psw=''
  // amnt=''

  // acno1=''
  // psw1=''
  // amnt1=''

  user=''

  constructor(private ds:DataService,private fb:FormBuilder) {

    // access username
    this.user=this.ds.currentuser

   }

   depositeForm=this.fb.group({acno:[''],psw:[''],amnt:['']})

   withdrawForm=this.fb.group({acno1:[''],psw1:[''],amnt1:['']})

  deposite(){

    var acno=this.depositeForm.value.acno
    var psw=this.depositeForm.value.psw
    var amnt=this.depositeForm.value.amnt

    const result=this.ds.deposite(acno,psw,amnt)

    if(result){
      alert(`${amnt} credited to your ac and the balance is ${result}`)
    }
    else{
      alert('incorrect acno or password')
    }

  }
  withdraw(){

    var acno1=this.withdrawForm.value.acno1
    var psw1=this.withdrawForm.value.psw1
    var amnt1=this.withdrawForm.value.amnt1

    const result=this.ds.withdraw(acno1,psw1,amnt1)
    if(result){
      alert(`${amnt1} is debited and the balance is ${result}`)
    }
  }
}
