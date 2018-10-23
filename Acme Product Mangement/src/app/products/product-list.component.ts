import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { DataService } from "../shared/dataService";

@Component({
    
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
    
})
export class ProductListComponent implements OnInit{
    productTitle:string='Product List View';
    imageWidth:number=50;
    showImage:boolean = false;
    listFilter:string='Cart';
    filteredProducts:IProduct[];
    _listFilter:string;
    clickedData:string;
    errorMsg:string;
    
    products:IProduct[];
    
        constructor(private _productService:ProductService,private _multiDemo:DataService){
            // console.log(this._multiDemo.justServiceDemo());
     }

        get listFlt():string{
            return this._listFilter;
        }

        set listFlt(value:string){
            this._listFilter = value;
            this.filteredProducts = this.listFlt ? this.performFilter(this.listFlt) : this.products;
        }
       toggleImage():void{
        this.showImage=!this.showImage;
        
      }

      
      ngOnInit():void{
         //this._productService.ProductData().subscribe(data => this.products=data);
         //console.log(this.products);
         //this.filteredProducts=this.products;
         //console.log(this.filteredProducts);

         this._productService.ProductData()
                            .subscribe(data=>{ this.products=data;this.filteredProducts =this.products;},
                            error=>this.errorMsg=error);
                            
                            
          
         // this.filteredProducts =this.products;

      }

      performFilter(filter:string): IProduct[] {
        filter=filter.toLocaleLowerCase();
                  return this.products.filter(k => k.productName.toLocaleLowerCase().indexOf(filter)!==-1);
      }


      OnClickedStar(clickedData:string){
        this.clickedData=clickedData;
      }


}