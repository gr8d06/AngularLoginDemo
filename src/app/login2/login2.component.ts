import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  SERVER_URL = "http://localhost:3000/login";
  postData = {
    UserName: 'c137@onecause.com',
    PassWord: '#th@nH@rm#y#r!$100%D0p#'
  }


  constructor(private httpClient: HttpClient) { 

  }
  ngOnInit() {

  }
  submitForm(value) {
      this.httpClient.post(this.SERVER_URL, this.postData).toPromise().then(data => {
        console.log(data);
      });
  }

}
