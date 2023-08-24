import { create_product } from 'src/app/contracts/create_product';
import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { ProductService } from 'src/app/services/common/models/product.service';
//import { create_product } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit{

  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertify: AlertifyService)
  {
    super(spinner);
  }

  ngOnInit(): void {
    
    }
    create(name: HTMLInputElement, stock: HTMLInputElement, price:HTMLInputElement){
      this.showSpinner(SpinnerType.BallAtom);
      //????
      const create_product : create_product = new Create_Product();
      create_product.name = name.value;
      create_product.stock = parseInt(stock.value);
      create_product.price = parseFloat(price.value);

      this.productService.create(create_product, () => this.hideSpinner(SpinnerType.BallScaleMultiple));
      this.alertify.message("Product added!",{
        dismissOthers:true,
        messageType: MessageType.Success,
        position: Position.TopRight

      });
}
}
