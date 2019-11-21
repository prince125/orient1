
import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class OtpProvider {
  otp = firebase.database().ref('/otp');
  constructor() {
  }

  addotp(otp: { randomNo: any; }){
    this.otp.set({
      randomNo:otp.randomNo,
  
    })
  }
 
}