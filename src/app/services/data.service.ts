import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentuser=''
  currentacno=''

  constructor() { }

  savedetails(){
    if(this.userDeatails){
      localStorage.setItem("database",JSON.stringify(this.userDeatails))
    }
    if(this.currentuser){
      localStorage.setItem("currentuser",JSON.stringify(this.currentuser))
    }
    if(this.currentacno){
      localStorage.setItem("currentacno",JSON.stringify(this.currentacno))
    }
  }
  
  userDeatails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0,transaction:[]},
    1001:{acno:1001,username:"amal",password:123,balance:0,transaction:[]},
    1002:{acno:1002,username:"arun",password:123,balance:0,transaction:[]},
    1003:{acno:1003,username:"mega",password:123,balance:0,transaction:[]}

  }

  register(acno:any,uname:any,psw:any){
    var userDeatails=this.userDeatails
    if(acno in userDeatails){
      return false
    }
    else{
      userDeatails[acno]={acno,username:uname,password:psw,balance:0,transaction:[]}
      console.log(userDeatails);
      
      return true
    }

  }
  login(acno:any,psw:any){

    var userdetails=this.userDeatails

    if(acno in userdetails){

      if(psw==userdetails[acno]["password"]){

        // acnumber
        this.currentacno=acno

        // store username
        this.currentuser=userdetails[acno]["username"]
       return true

      }
      else{
        return false
      }
    }
    else{
      return false
    }
   
  }
  deposite(acno:any,password:any,amount:any){
      var userDeatails=this.userDeatails
      var amnt=parseInt(amount)
      if(acno in userDeatails){
        if(password==userDeatails[acno]["password"]){
          userDeatails[acno]["balance"]+=amnt
          userDeatails[acno]["transaction"].push({type:'credit',amount:amnt})
          return userDeatails[acno] ["balance"]

        }
        else{
          return false
        }
      }
      else{
        return false
      }
  }

  withdraw(acno:any,password:any,amount:any){
    var userDeatails=this.userDeatails
    var amnt=parseInt(amount)
    if(acno in userDeatails){
      if(password==userDeatails[acno]["password"]){
        if(amnt<=userDeatails[acno]["balance"]){
          userDeatails[acno]["balance"]-=amnt

          userDeatails[acno]["transaction"].push({type:'debit',amount:amnt})

          return userDeatails[acno] ["balance"]
          
        }
        else{
          alert('insufficient balance')
          return false
        }
      }
      else{
        alert('incorrect password')
        return false
      }
    }
    else{
      alert('incorrect ac number')
      return false
    }
  } 

  gettransaction(acno:any){
    return this.userDeatails[acno]['transaction']
  }




}
