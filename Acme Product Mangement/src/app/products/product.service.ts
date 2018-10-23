import { Injectable, ErrorHandler } from "@angular/core";
import { IProduct } from "./product";
import {  HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ProductService{

    private _url = 'api/products/products.json';
    constructor(private http: HttpClient){}


    


    ProductData():Observable<IProduct[]>{

        return this.http.get<IProduct[]>(this._url)
        .catch(this.errorHandler);

    }
        errorHandler(error: HttpErrorResponse){
            return Observable.throw(error.message || "Server Error");
        }



}