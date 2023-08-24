import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import {  create_product } from 'src/app/contracts/create_product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService:  HttpClientService) { }
  
  create(product:create_product, successCallBack?: any){
    this.httpClientService.post({
      controller:"products"
    }, product)
    .subscribe(result => {
      successCallBack();
   
    });
  }
}
