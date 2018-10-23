import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacePipe } from './shared/convert-to-space-pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from "@angular/common/http"
import { PageNotFound } from './others/pagenotfound.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail-guard';

const appRoutes :Routes=[

{ path:'welcome',component:WelcomeComponent},
{ path:'products',component:ProductListComponent},
{ path:'products/:id',
  canActivate:[ProductDetailGuard],
  component:ProductDetailComponent},
{ path:'',redirectTo:'/welcome',pathMatch:'full'},
{ path:'**',component:PageNotFound}
];


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    PageNotFound,
    WelcomeComponent,
    ProductDetailComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
