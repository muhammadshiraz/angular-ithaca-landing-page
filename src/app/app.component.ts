/**
 * In the following component, update the code so that when the value of the [loan-amount] is changed:
 * * If it's blank or 0, the values of [monthly_payment] and [late_payment] becomes "N/A",
 * * If it has a value, the value of [monthly_payment] becomes 2% of [loan-ammount] and the value of [late_payment] becomes 5% of [monthly_payment].
 * * Both [monthly_payment] and [late_payment] should print in the template in currency format : $1,234
 */

 import { Component, Input, NgModule  } from '@angular/core';
 import { RouterModule } from "@angular/router";
 
 @Component({
     selector : 'ng-app',
     templateUrl: './app.component.html',
 })
 export class AppComponent {
    home_slider_title:string = "Do the right thing";    
    reviews_count:string = '3,252';
    status: boolean = false;
    toggleClass(){
        this.status = !this.status;
    }
 }
 
 @NgModule({
     imports : [
         RouterModule.forChild([
             {
                 path : "",
                 component : AppComponent
             }
         ])
     ],
     declarations : [AppComponent]
 })
 export class AppModule {}