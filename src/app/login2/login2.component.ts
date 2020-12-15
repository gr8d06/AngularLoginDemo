import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  redirectUrl = "http://onecause.com";
  SERVER_URL = "http://localhost:3000/login";
  postData = {
    UserName: 'c137@onecause.com',
    PassWord: '#th@nH@rm#y#r!$100%D0p#',
    OneKey: '1234'
  }

  constructor(private httpClient: HttpClient) { 

  }
  ngOnInit() {

  }


  submitForm(value: any) {
      this.httpClient.post(this.SERVER_URL, value).toPromise().then(data => {
        console.log(data);
        //this.router.navigateByUrl(this.redirectUrl); // this will look internally to the angular routing. requires more setup. 
        window.location.href = this.redirectUrl;
      });
  }


  /*
    submitForm(value: any){
       return this.httpClient.post(this.SERVER_URL, value).toPromise()
       .then(response => {
        window.location.href = this.redirectUrl;}
       ).catch(
        // error => this.toastr.error('some error message')
         
         );       
    };

      
  */  
    


}
