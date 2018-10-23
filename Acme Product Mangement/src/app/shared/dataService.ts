import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'//By root means it is available in every component //here we registered it with angular
})
export class DataService{

    justServiceDemo():number{  //not a great way to demo still
        return 5*5;
    }
}


//first declare service.ts
//then register it
//then inject it where u want to use
//this is know as dependency injection
//inject using Constructor