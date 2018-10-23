import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router'
import { ProductService } from "./product.service";
import { IProduct } from "./product";
import {  Router } from '@angular/router';

@Component({
    selector:'product-detail',
    templateUrl:'./product-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
    
    products:IProduct[];
    errorMsg:String;
    k:number;
    ngOnInit(): void {
        
        let id =+ this._route.snapshot.paramMap.get('id');
        this.k=id;
        
        

        
        
    }
    pageTitle:string='Product Detail';

    constructor(private _route:ActivatedRoute,private _productService:ProductService,private _router:Router){
       
        this._productService.ProductData()
        .subscribe(data=>{ this.products=data;},
        error=>this.errorMsg=error);
        
    }


    onClick():void{
        this._router.navigate(['/products']);
    }

}